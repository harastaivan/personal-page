import type { TRuleWithTheme } from 'styles/theme';

import type { SectionHeadlineProps } from './SectionHeadline';

type StyleProps = Pick<SectionHeadlineProps, 'inverted'>;

export const headline: TRuleWithTheme = ({ theme: { metrics } }) => ({
    marginBottom: metrics.spacing * 1.5,
});

export const prefix: TRuleWithTheme<StyleProps> = ({ theme: { colors }, inverted = false }) => ({
    position: 'absolute',
    left: '-1.3em',

    color: inverted ? colors.primary : colors.secondary,
});
