import type { TRuleWithTheme } from 'styles/theme';

export const group: TRuleWithTheme = ({ theme: { metrics } }) => ({
    marginTop: metrics.spacing * 2,
    fontSize: '1.1em',
});
