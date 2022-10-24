import type { TRuleWithTheme } from 'styles/theme';

import type { HeadlineProps } from './Headline';

type StyleProps = Pick<HeadlineProps, 'color'>;

export const headline: TRuleWithTheme<StyleProps> = ({ theme: { colors }, color = 'primary' }) => ({
    fontWeight: 700,

    color: colors[color],

    position: 'relative',
});
