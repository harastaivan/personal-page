import type { TRuleWithTheme } from 'styles/theme';

export const headline: TRuleWithTheme = ({ theme: { colors } }) => ({
    fontWeight: 700,

    color: colors.primary,

    position: 'relative',
});
