import type { TRuleWithTheme } from 'styles/theme';

export const link: TRuleWithTheme = ({ theme: { colors } }) => ({
    color: colors.secondary,
    fontWeight: 700,

    transition: 'color 0.5s ease',

    onHover: {
        color: colors.tertiary,
    },
});
