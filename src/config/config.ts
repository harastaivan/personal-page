import { merge } from 'lodash';
import { isLocalhost } from 'constants/index';
import type { ConfigDevelopment } from './config.development';

const envConfig = require(`./config.${process.env.REACT_APP_BUILD_ENV}.ts`).default;

const defaults = {
    sentry: {
        enable: !isLocalhost,
    },
    useServiceWorker: false,
    api: {
        signIn: '/v1/auth/sign-in',
        me: '/v1/users/me',
        refresh: '/v1/auth/refresh',
    },
    routes: {
        home: '/',
    },
    forms: {
        login: 'loginForm',
    },
};

export default merge(defaults, envConfig) as ConfigDevelopment & typeof defaults;
