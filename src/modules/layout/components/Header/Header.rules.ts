import type { TRuleWithTheme } from 'styles/theme';

export const header: TRuleWithTheme = ({ theme: { metrics } }) => ({
    paddingTop: metrics.spacing * 5,
    paddingBottom: metrics.spacing * 5,
    paddingLeft: metrics.spacing * 15,
    paddingRight: metrics.spacing * 15,

    fontWeight: 700,
    fontSize: '1.25rem',

    cursor: 'default',

    isTablet: {
        paddingLeft: metrics.spacing * 10,
        paddingRight: metrics.spacing * 10,
    },

    isMobile: {
        paddingLeft: metrics.spacing * 7,
        paddingRight: metrics.spacing * 7,
    },
});

export const prefix: TRuleWithTheme = ({ theme: { colors, metrics } }) => ({
    color: colors.primary,

    marginRight: metrics.spacing,
});
