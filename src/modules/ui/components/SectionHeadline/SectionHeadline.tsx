import type { ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';

import * as felaRules from './SectionHeadline.rules';

import { Headline, HeadlineProps } from '../Headline';

export interface SectionHeadlineProps extends Omit<HeadlineProps, 'extend' | 'color'> {
    children: ReactNode;
    inverted?: boolean;
    extend?: RulesExtend<typeof felaRules>;
}

export const SectionHeadline = ({ children, inverted, extend, ...props }: SectionHeadlineProps) => {
    const { styles, rules } = useFelaEnhanced(felaRules, { extend, inverted });

    return (
        <Headline extend={{ headline: rules.headline }} color={inverted ? 'secondary' : 'primary'} {...props}>
            <span className={styles.prefix}>
                <FormattedMessage id="headline.prefix" />
            </span>
            {children}
        </Headline>
    );
};
