import type { ReactNode } from 'react';

import { Localizations } from '../modules/localization';
import { ErrorBoundary } from 'modules/errors';

interface EnhancersProps {
    children: ReactNode;
}

const Enhancers = ({ children }: EnhancersProps) => (
    <Localizations>
        <ErrorBoundary>{children}</ErrorBoundary>
    </Localizations>
);

export default Enhancers;
