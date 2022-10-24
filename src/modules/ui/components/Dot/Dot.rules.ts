import type { TRuleWithTheme } from 'styles/theme';

export const dot: TRuleWithTheme = ({ theme }) => ({
    color: theme.colors.primary,

    marginLeft: theme.metrics.spacing,
    marginRight: theme.metrics.spacing,
});
