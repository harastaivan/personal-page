import * as Sentry from '@sentry/react';
import { omit, isEmpty } from 'lodash';

import * as loglevel from 'loglevel';
import { isEnvProduction } from 'constants/index';

isEnvProduction ? loglevel.disableAll() : loglevel.enableAll();

export const { warn, info, trace, debug } = loglevel;

const forbiddenExtras = ['authorization'];

export const error = (err: string | Error, extra: string | { [key: string]: any } = {}) => {
    const extras = typeof extra === 'object' ? omit(extra, forbiddenExtras) : { extra };
    const errStringified = err.toString();

    if (isEmpty(extras)) {
        loglevel.error(errStringified);
    } else {
        loglevel.error(errStringified, extras);
    }

    Sentry.withScope(scope => {
        scope.setExtras(extras);
        Sentry.captureException(err);
    });
};
