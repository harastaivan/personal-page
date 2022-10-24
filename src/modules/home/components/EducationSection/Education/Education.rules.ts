import type { TRuleWithTheme } from 'styles/theme';

export const education: TRuleWithTheme = ({ theme: { metrics } }) => ({
    marginTop: metrics.spacing * 4,
});

export const faculty: TRuleWithTheme = ({ theme: { colors } }) => ({
    color: colors.tertiary,
});

export const subsectionTitle: TRuleWithTheme = ({ theme: { colors, metrics } }) => ({
    color: colors.primary,
    marginTop: metrics.spacing * 1.5,
});

export const highlighted: TRuleWithTheme = ({ theme: { colors } }) => ({
    color: colors.tertiary,
});

export const links: TRuleWithTheme = ({ theme: { metrics } }) => ({
    marginTop: metrics.spacing * 1.5,
});

export const work: TRuleWithTheme = ({ theme: { metrics } }) => ({
    display: 'flex',
    // alignItems: 'flex-end',
    gap: metrics.spacing * 4,
});
