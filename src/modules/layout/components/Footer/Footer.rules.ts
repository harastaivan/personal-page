import type { TRuleWithTheme } from 'styles/theme';

export const footer: TRuleWithTheme = ({ theme: { metrics } }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    paddingTop: metrics.spacing * 5,
    paddingBottom: metrics.spacing * 5,
});

export const version: TRuleWithTheme = ({ theme: { metrics } }) => ({
    fontWeight: 700,

    marginTop: metrics.spacing * 2,
});
