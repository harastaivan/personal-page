import { all } from 'redux-saga/effects';

import registration from './registration';
import toasts from './toasts';

export default function* () {
    if ('serviceWorker' in navigator) {
        yield all([registration(), toasts()]);
    }
}
