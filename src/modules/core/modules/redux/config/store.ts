import { configureStore as reduxConfigureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { routerMiddlewareWithHistory } from 'modules/core/modules/router';

import config from 'config';
import * as Log from 'config/loglevel';
import { sentryReduxEnhancer } from 'config/sentry';

import { isServerEnv } from 'constants/index';

import reducer from '../services/reducer';
import rootSaga from '../services/saga';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware({
        onError: Log.error,
    });

    const store = reduxConfigureStore({
        reducer,
        preloadedState: {},
        devTools: config.devTools && !isServerEnv ? { trace: true } : false,
        middleware: getDefaultMiddleware => {
            // https://redux-toolkit.js.org/api/getDefaultMiddleware#included-default-middleware
            const defaultMiddlewares = getDefaultMiddleware({
                serializableCheck: false,
                thunk: false,
            });

            return defaultMiddlewares.concat([routerMiddlewareWithHistory, sagaMiddleware]);
        },
        enhancers: [sentryReduxEnhancer],
    });

    if (!isServerEnv) {
        sagaMiddleware.run(rootSaga);
    }

    return store;
}

type AppStore = ReturnType<typeof configureStore>;

export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;
