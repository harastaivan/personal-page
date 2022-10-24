import type { HTMLAttributes, ReactNode } from 'react';

import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';

import * as felaRules from './Link.rules';

export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: ReactNode;
    extend?: RulesExtend<typeof felaRules>;
}

export const Link = ({ children, extend, ...props }: LinkProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });

    return (
        <a className={styles.link} {...props}>
            {children}
        </a>
    );
};
