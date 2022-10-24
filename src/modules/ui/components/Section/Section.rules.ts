import type { TRuleWithTheme } from 'styles/theme';

export const section: TRuleWithTheme = ({ theme: { metrics } }) => ({
    paddingTop: metrics.spacing * 2,
    paddingBottom: metrics.spacing * 6,
});
