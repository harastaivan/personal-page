import { take, race, delay, select } from 'redux-saga/effects';
import type { EventChannel } from 'redux-saga';
import { eventChannel } from 'redux-saga';

import * as logger from 'config/loglevel';
import { selectors as networkSelectors, actions as networkActions } from 'modules/network';

import { UPDATE_CHECKER_INTERVAL, UPDATE_CHECKER_MINIMAL_INVERAL } from '../../../constants';

const pageVisibilityStateEmitter = () =>
    eventChannel<DocumentVisibilityState>(emitter => {
        function handler() {
            emitter(document.visibilityState);
        }

        document.addEventListener('visibilitychange', handler);

        return () => {
            document.removeEventListener('visibilitychange', handler);
        };
    });

async function update() {
    try {
        // The ready read-only property of the ServiceWorkerContainer interface provides a way
        // of delaying code execution until a service worker is active.
        // It returns a Promise that will never reject, and which waits indefinitely
        // until the ServiceWorkerRegistration associated with the current page has an active worker.
        // Once that condition is met, it resolves with the ServiceWorkerRegistration.
        // eslint-disable-next-line compat/compat
        const swRegistration = await navigator.serviceWorker.ready;

        // From: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/update
        // The update() method of the ServiceWorkerRegistration interface attempts to update the service worker.
        // It fetches the worker's script URL, and if the new worker is not byte-by-byte identical to the current worker,
        // it installs the new worker. The fetch of the worker bypasses any browser caches if the previous
        // fetch occurred over 24 hours ago.
        await swRegistration.update();
    } catch (e) {
        logger.error(e);
    }
}

function* scheduleUpdate(pageVisibilityState: EventChannel<DocumentVisibilityState>) {
    const started = Date.now();

    yield race({
        networkState: take([networkActions.setNetworkStatusOnline.type, networkActions.setNetworkStatusOffline.type]),
        pageVisibilityState: take(pageVisibilityState),
        timer: delay(UPDATE_CHECKER_INTERVAL),
    });

    const duration = Date.now() - started;

    if (duration < UPDATE_CHECKER_INTERVAL) {
        yield delay(UPDATE_CHECKER_MINIMAL_INVERAL - duration);
    }

    return yield select(networkSelectors.isOnlineSelector);
}

export default function* updateChecker() {
    const pageVisibilityState = pageVisibilityStateEmitter();

    while (true) {
        const shouldUpdate: boolean = yield* scheduleUpdate(pageVisibilityState);

        if (shouldUpdate) {
            yield update();
        }
    }
}
