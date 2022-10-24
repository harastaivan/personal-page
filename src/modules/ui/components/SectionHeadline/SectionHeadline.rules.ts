import type { TRuleWithTheme } from 'styles/theme';

export const headline: TRuleWithTheme = ({ theme: { metrics } }) => ({
    marginBottom: metrics.spacing * 1.5,
});

export const prefix: TRuleWithTheme = ({ theme: { colors } }) => ({
    position: 'absolute',
    left: -30,

    color: colors.secondary,
});
