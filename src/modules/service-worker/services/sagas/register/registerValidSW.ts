import { take, put, call, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as logger from 'config/loglevel';

import { installationSuccess } from '../../actions';
import updateChecker from '../update/updateChecker';
import updateSW from '../update/updateSW';

const installingWorkerStateEmitter = (registration: ServiceWorkerRegistration) =>
    eventChannel<ServiceWorkerState>(emitter => {
        function updateFoundHandler() {
            const newWorker = registration.installing;

            if (newWorker === null) {
                return;
            }

            newWorker.onstatechange = () => {
                emitter(newWorker.state);
            };
        }

        registration.addEventListener('updatefound', updateFoundHandler);

        return () => {
            registration.removeEventListener('updatefound', updateFoundHandler);
        };
    });

export default function* registerValidSW(swUrl: string) {
    try {
        // eslint-disable-next-line compat/compat
        const sw = navigator.serviceWorker;
        const registration: ServiceWorkerRegistration = yield sw.register(swUrl);

        if (sw.controller && registration.waiting) {
            // We can have some waiting worker in a background
            // this case will happen, when we detected new service worker to install, show UI prompt
            // and then user refresh or close the page
            // this will show to ui message again until the user accept the update
            yield call(updateSW, registration);
        }

        yield fork(updateChecker);

        while (true) {
            // installState will fire when new service worker wants to be installed
            // then installState will change everytime the progress of installating new service worker changes
            // when installState of service worker became installed, there is two scenarious possible
            // 1. it is first time, when service worker is being installed - no problem
            // 2. our new service worker stucks at WAITING phase, because there is other SW which is active
            // we then let user decide to update or not, if so then we will send message to currently waiting
            // service worker to skipWaiting - which means that the SW became active
            // because all other instances are listening for installlatin progress and they observe
            // that new service worker became active, page will reload.
            const installState: ServiceWorkerState = yield take(installingWorkerStateEmitter(registration));

            if (installState === 'installed') {
                if (sw.controller) {
                    yield call(updateSW, registration);
                } else {
                    yield put(installationSuccess());
                }
            }
        }
    } catch (e) {
        logger.error(e);
    }
}
