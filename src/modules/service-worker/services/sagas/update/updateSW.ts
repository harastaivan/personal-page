import * as logger from 'config/loglevel';
import { put } from 'redux-saga/effects';
import { newVersionAvailable } from '../../actions';

/**
 * Switch to a waiting SW by sending a special kind of message to the SW.
 */
function startUpdate(registration: ServiceWorkerRegistration) {
    try {
        if (registration.waiting) {
            registration.waiting.onerror = event => {
                logger.error(event.error);
                window.location.reload();
            };

            /**
             * The CRA build\service-worker.js file now (>=v3) includes code to handle skipWaiting as
             * https://stackoverflow.com/questions/52904430/how-to-implement-skipwaiting-with-create-react-app
             */
            registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
    } catch (e) {
        logger.error(e);
    }
}

/**
 * Show UI snackbar with button that triggers 'startUpdate' callback on click.
 * The 'startUpdate' forces to use awaiting SW and thus replaces the current active one.
 */
export default function* updateSW(registration: ServiceWorkerRegistration) {
    yield put(newVersionAvailable(() => startUpdate(registration)));
}
