import * as logger from 'config/loglevel';
import * as sagaEffects from 'redux-saga/effects';

import * as actions from '../actions';

const { all, takeEvery } = sagaEffects;

function* successfulInstallation() {
    yield takeEvery(actions.installationSuccess.type, function () {
        logger.info('Service worker has been installed');
    });
}

function* updateAvailable() {
    yield takeEvery(
        actions.newVersionAvailable.type,
        function (action: ReturnType<typeof actions.newVersionAvailable>) {
            const result = window.confirm('New version of app available. Upgrade?');

            if (result) {
                action.payload();
            }
        },
    );
}

export default function* toasts() {
    yield all([successfulInstallation(), updateAvailable()]);
}
