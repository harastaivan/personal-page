import type { TRuleWithTheme } from 'styles/theme';

export const work: TRuleWithTheme = ({ theme: { metrics } }) => ({
    marginTop: metrics.spacing * 4,
});

export const at: TRuleWithTheme = ({ theme: { colors } }) => ({
    color: colors.tertiary,
});

export const technologies: TRuleWithTheme = ({ theme: { metrics } }) => ({
    marginTop: metrics.spacing * 1.5,
    fontWeight: 500,
});

export const description: TRuleWithTheme = ({ theme: { metrics } }) => ({
    marginTop: metrics.spacing * 1.5,
    maxWidth: 600,
});
