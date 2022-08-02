import { all, setContext } from 'redux-saga/effects';
import { createIntlContext } from '@ackee/jerome';

import { saga as localizationSaga } from 'modules/core/modules/localization';

import saga from 'services/sagas';

export default function* rootSaga() {
    yield setContext(createIntlContext());
    yield all([localizationSaga(), saga()]);
}
