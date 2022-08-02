import type { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../config';

interface ReduxProps {
    children: ReactNode;
}

const Redux = ({ children }: ReduxProps) => {
    const store = configureStore();

    return <Provider store={store}>{children}</Provider>;
};

export default Redux;
