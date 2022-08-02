import { all } from 'redux-saga/effects';

import { saga as serviceWorker } from 'modules/service-worker';
import { saga as network } from 'modules/network';

export default function* appSaga() {
    yield all([serviceWorker(), network()]);
}
