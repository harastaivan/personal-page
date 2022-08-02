import { all } from 'redux-saga/effects';

import handleConnectionStatus from './handleConnectionStatus';

export default function* () {
    yield all([handleConnectionStatus()]);
}
