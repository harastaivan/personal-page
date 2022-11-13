import type { TRuleWithTheme } from 'styles/theme';

export const container: TRuleWithTheme = ({ theme: { colors } }) => ({
    width: '100%',
    minHeight: '100vh',

    backgroundImage: `radial-gradient(${colors.bgSecondary} 0.5px, transparent 0.5px), radial-gradient(${colors.bgSecondary} 0.5px, ${colors.bgPrimary} 0.5px)`,
    backgroundSize: '30px 30px',
    backgroundPosition: '0 0,15px 15px',

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
