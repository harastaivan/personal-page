import type { ReactNode } from 'react';

import { ErrorBoundary } from 'modules/errors';

import { Localizations } from '../modules/localization';

interface EnhancersProps {
    children: ReactNode;
}

const Enhancers = ({ children }: EnhancersProps) => (
    <Localizations>
        <ErrorBoundary>{children}</ErrorBoundary>
    </Localizations>
);

export default Enhancers;
