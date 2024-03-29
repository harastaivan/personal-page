import type { TRuleWithTheme } from 'styles/theme';

export const header: TRuleWithTheme = ({ theme: { metrics } }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingTop: metrics.spacing * 5,
    paddingBottom: metrics.spacing * 5,
    paddingLeft: metrics.spacing * 15,
    paddingRight: metrics.spacing * 15,

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

export const headline: TRuleWithTheme = () => ({
    marginBottom: 0,
});
