import React from 'react';
import { combineMultiRules } from 'fela-tools';
import { useFela } from 'react-fela';

import type { TNormalizedMultiRule } from 'fela-tools';
import type { TRule } from 'fela';
import type { Rules as ReactFelaRules } from 'react-fela';

import type { Theme, ThemeProps } from 'styles/theme';

declare module 'fela-tools' {
    function combineMultiRules<TRuleProps, Styles>(
        ...rules: Array<TMultiRule>
    ): TNormalizedMultiRule<TRuleProps, Styles>;
}

/**
 * This solution is based on the implementation of [connect binding](https://github.com/robinweser/fela/blob/master/packages/fela-bindings/src/connectFactory.js) from fela
 *
 * Note that `rules` & `extend` props are considered to be static.
 */
export default function useFelaEnhanced<FelaRules, Props>(
    rules: ReactFelaRules<Props, FelaRules, Theme>,
    props: Props & { extend?: ReactFelaRules<Omit<Props, 'extend'>, FelaRules, Theme> } = {} as Props,
) {
    const { theme, renderer } = useFela<Theme>();

    const { extend, ...otherProps } = props;

    type PropsWithoutExtend = Omit<Props, 'extend'>;
    type PropsWithTheme = PropsWithoutExtend & ThemeProps;

    const combinedRules: TNormalizedMultiRule<ThemeProps, FelaRules> = React.useMemo(() => {
        const allRules = [rules];

        if (extend) {
            allRules.push(extend);
        }

        return combineMultiRules(...allRules);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return React.useMemo(() => {
        const preparedRules = combinedRules(
            {
                ...otherProps,
                theme,
            },
            renderer,
        );

        type RulesKey = keyof FelaRules;
        type Styles = { [key in RulesKey]: string };

        const rulesKeys = Object.keys(preparedRules) as RulesKey[];

        const styles = rulesKeys.reduce<Styles>((styleMap, name) => {
            const preparedRule = preparedRules[name] as TRule<PropsWithTheme>;

            styleMap[name] = renderer.renderRule(preparedRule, {
                ...otherProps,
                theme,
            });

            return styleMap;
        }, {} as Styles);

        type Rules = { [key in RulesKey]: TRule<ThemeProps> };
        type Props = { [key: string]: any };
        const boundRules = rulesKeys.reduce<Rules>((ruleMap, name) => {
            ruleMap[name] = (props: Props) =>
                preparedRules[name](
                    {
                        theme,
                        ...props,
                    },
                    renderer,
                );

            return ruleMap;
        }, {} as Rules);

        return {
            styles,
            theme,
            rules: boundRules,
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [combinedRules, renderer, theme, ...Object.keys(otherProps), ...Object.values(otherProps)]);
}
