import type { ReactNode } from 'react';
import { ErrorBoundary as SentryErrorBoundary } from '@sentry/react';
import type { ErrorBoundaryProps as SentryErrorBoundaryProps } from '@sentry/react/esm/errorboundary';
import * as Log from 'config/loglevel';

import ErrorMessage from '../ErrorMessage';

const handleError: SentryErrorBoundaryProps['onError'] = (error, componentStack) => {
    Log.error(error, componentStack);
};

interface ErrorBoundaryProps extends Pick<SentryErrorBoundaryProps, 'fallback' | 'onError'> {
    children: ReactNode;
}

const defaultFallback = <ErrorMessage />;

export const ErrorBoundary = ({ children, fallback = defaultFallback, onError = handleError }: ErrorBoundaryProps) => (
    <SentryErrorBoundary fallback={fallback} onError={onError}>
        {children}
    </SentryErrorBoundary>
);

export default ErrorBoundary;
