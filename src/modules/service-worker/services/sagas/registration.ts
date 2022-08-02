import * as logger from 'config/loglevel';

import config from 'config/config';

import register from './register';
import unregister from './unregister';

export default function* registration() {
    try {
        config.useServiceWorker ? yield register() : yield unregister();
    } catch (e) {
        logger.error(e);
    }
}
