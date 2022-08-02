import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';

export const history = createBrowserHistory();

export const routerMiddlewareWithHistory = routerMiddleware(history);

export const connectRouterWithHistory = connectRouter(history);
