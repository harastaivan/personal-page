import { init, createReduxEnhancer } from '@sentry/react';
import type { BrowserOptions } from '@sentry/react';

import config from 'config/config';
import { currentEnv, isEnvProduction, isServerEnv } from 'constants/index';

declare global {
    interface Window {
        requestIdleCallback: (cb: IdleRequestCallback, options?: IdleRequestOptions) => number;
    }
}

if (config.sentry.enable) {
    const options: BrowserOptions = {
        dsn: config.sentry.dsn,
        debug: false,
        integrations: [],
        environment: currentEnv,
        release: `${process.env.REACT_APP_NAME}@${process.env.REACT_APP_VERSION}`,
        denyUrls: [
            // Chrome extensions
            /extensions\//i,
            /^chrome:\/\//i,
        ],
        normalizeDepth: 5,
        tracesSampleRate: isEnvProduction ? 0.25 : 1.0,
    };

    const initSentry = () => init(options);

    if (isServerEnv && 'requestIdleCallback' in window) {
        window.requestIdleCallback(initSentry);
    } else {
        setTimeout(initSentry, 0);
    }
}

export const sentryReduxEnhancer = createReduxEnhancer();
