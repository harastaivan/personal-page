import type { TRuleWithTheme } from 'styles/theme';

export const project: TRuleWithTheme = ({ theme: { metrics } }) => ({
    marginTop: metrics.spacing * 4,
});

export const technologies: TRuleWithTheme = ({ theme: { metrics } }) => ({
    marginTop: metrics.spacing * 1.5,
    fontWeight: 500,
});

export const description: TRuleWithTheme = ({ theme: { metrics } }) => ({
    marginTop: metrics.spacing * 1.5,
    maxWidth: 600,
});

export const link: TRuleWithTheme = ({ theme: { metrics } }) => ({
    marginTop: metrics.spacing * 1.5,
});

export const highlighted: TRuleWithTheme = ({ theme: { colors } }) => ({
    color: colors.primary,
});
