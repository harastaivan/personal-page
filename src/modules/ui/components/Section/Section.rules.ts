import type { TRuleWithTheme } from 'styles/theme';

export const section: TRuleWithTheme = ({ theme: { metrics } }) => ({
    paddingTop: metrics.spacing * 4,
    paddingBottom: metrics.spacing * 10,
});
