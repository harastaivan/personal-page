import type { ReactNode } from 'react';

import { Fela } from '../modules/fela';
import { Redux } from '../modules/redux';
import { Router } from '../modules/router';

import Enhancers from '../containers/Enhancers';

interface CoreProps {
    children: ReactNode;
}

function Core({ children }: CoreProps) {
    return (
        <Redux>
            <Fela>
                <Router>
                    <Enhancers>{children}</Enhancers>
                </Router>
            </Fela>
        </Redux>
    );
}

export default Core;
