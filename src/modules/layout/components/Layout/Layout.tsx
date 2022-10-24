import type { ReactNode } from 'react';

import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';

import * as felaRules from './Layout.rules';
import { Header } from '../Header';
import { Footer } from '../Footer';

export interface LayoutProps {
    children: ReactNode;
    extend?: RulesExtend<typeof felaRules>;
}

export const Layout = ({ children, extend }: LayoutProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>{children}</div>
            <Footer />
        </div>
    );
};
