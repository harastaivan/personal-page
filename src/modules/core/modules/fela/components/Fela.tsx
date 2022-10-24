import type { ReactNode } from 'react';
import { RendererProvider, ThemeProvider } from 'react-fela';
import { createRenderer } from 'fela';

import { theme } from 'styles/theme';

import * as config from '../config';

interface FelaProps {
    children: ReactNode;
}

const renderer = createRenderer(config.rendererConfig);

function Fela({ children }: FelaProps) {
    return (
        <RendererProvider renderer={renderer}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </RendererProvider>
    );
}

export default Fela;
