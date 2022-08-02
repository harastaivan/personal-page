import type { TRule } from 'fela';

import { colors } from './colors';
import * as font from './font';
import metrics from './metrics';

export const theme = {
    colors,
    metrics,
    font,
};

export type Theme = typeof theme;
export type ThemeProps = { theme: Theme };

export type TRuleWithTheme<Props = {}> = TRule<ThemeProps & Props>;

export type RulesExtend<TExtandalbeRules, TProps = {}> = Partial<
    Record<keyof TExtandalbeRules, TRuleWithTheme<TProps>>
>;
