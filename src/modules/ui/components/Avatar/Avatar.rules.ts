import type { TRuleWithTheme } from 'styles/theme';

const SIZE = 150;

export const root: TRuleWithTheme = () => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    width: SIZE,
    height: SIZE,
    borderRadius: '100%',
});

export const image: TRuleWithTheme = () => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',
});

export const fallback: TRuleWithTheme = ({ theme: { colors } }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    color: colors.bgPrimary,
    fontSize: 30,
    lineHeight: 1,
    fontWeight: 500,
});
