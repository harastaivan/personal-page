import { combineRules } from 'fela';

import type { TRuleWithTheme } from 'styles/theme';

export const centeredSection: TRuleWithTheme = () => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

export const headline: TRuleWithTheme = ({ theme }) => ({
    marginTop: theme.metrics.spacing * 4,
});

export const subHeadline: TRuleWithTheme = ({ theme }) => ({
    marginTop: theme.metrics.spacing * 2,
    color: theme.colors.secondary,
});

export const highlightedSubHeadline = combineRules(subHeadline, ({ theme: { colors } }) => ({
    color: colors.tertiary,
}));

export const items: TRuleWithTheme = () => ({
    justifyContent: 'center',
});
