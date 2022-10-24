import type { TRuleWithTheme } from 'styles/theme';

export const container: TRuleWithTheme = ({ theme: { colors } }) => ({
    width: '100%',
    minHeight: '100vh',
    background: colors.bgPrimary,

    display: 'flex',
    flexDirection: 'column',

    color: colors.secondary,
});

export const content: TRuleWithTheme = ({ theme: { metrics } }) => ({
    paddingTop: 0,
    paddingBottom: metrics.spacing * 5,
    paddingLeft: metrics.spacing * 15,
    paddingRight: metrics.spacing * 15,

    isTablet: {
        paddingLeft: metrics.spacing * 10,
        paddingRight: metrics.spacing * 10,
    },

    isMobile: {
        paddingLeft: metrics.spacing * 7,
        paddingRight: metrics.spacing * 7,
    },
});
