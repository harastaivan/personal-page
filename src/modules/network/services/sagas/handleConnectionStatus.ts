import * as sagaEffects from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { ConnectionStatus } from '../../constants';
import { networkStatusSelector } from '../selectors';
import getConnectionStatus from '../utils/getConnectionStatus';
import { actions } from '../slice';

const { takeEvery, put, select } = sagaEffects;

function* createConnectionChannel() {
    if (!('connection' in navigator)) {
        return eventChannel<ConnectionStatus>(emit => {
            function onlineHandler() {
                emit(ConnectionStatus.ONLINE);
            }

            function offlineHandler() {
                emit(ConnectionStatus.OFFLINE);
            }

            window.addEventListener('online', onlineHandler);
            window.addEventListener('offline', offlineHandler);

            return () => {
                window.removeEventListener('online', onlineHandler);
                window.removeEventListener('offline', offlineHandler);
            };
        });
    }

    let prevStatus = yield select(networkStatusSelector);

    return eventChannel<ConnectionStatus>(emit => {
        function handleConnectionStatusChange() {
            const status = getConnectionStatus();

            if (status !== prevStatus) {
                emit(status);
                prevStatus = status;
            }
        }

        // eslint-disable-next-line compat/compat
        const connection = navigator.connection;

        connection.addEventListener('change', handleConnectionStatusChange);

        return () => connection.removeEventListener('change', handleConnectionStatusChange);
    });
}

export default function* networkConnection() {
    const connectionChannel = yield createConnectionChannel();

    yield takeEvery(connectionChannel, function* (status: ConnectionStatus) {
        switch (status) {
            case ConnectionStatus.OFFLINE:
                yield put(actions.setNetworkStatusOffline());
                break;

            case ConnectionStatus.ONLINE:
                yield put(actions.setNetworkStatusOnline());
                break;

            default:
        }
    });
}
