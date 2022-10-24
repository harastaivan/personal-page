import type { ReactNode } from 'react';

import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';

import * as felaRules from './Paragraph.rules';

export interface ParagraphProps {
    children: ReactNode;
    extend?: RulesExtend<typeof felaRules>;
}

export const Paragraph = ({ children, extend }: ParagraphProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });

    return <p className={styles.paragraph}>{children}</p>;
};
