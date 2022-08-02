import type { ReactNode } from 'react';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../config';

type RouterProps = { children: ReactNode };

const Router = ({ children }: RouterProps) => <ConnectedRouter history={history}>{children}</ConnectedRouter>;

export default Router;
