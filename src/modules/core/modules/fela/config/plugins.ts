import type { TPlugin } from 'fela';

import felaPluginExtend from 'fela-plugin-extend';
import felaPluginEmbedded from 'fela-plugin-embedded';
import felaPluginPlaceholderPrefixer from 'fela-plugin-placeholder-prefixer';
import felaPluginValidator from 'fela-plugin-validator';
import felaPluginUnit from 'fela-plugin-unit';
import felaPluginNamedKeys from 'fela-plugin-named-keys';
import felaPluginFallbackValue from 'fela-plugin-fallback-value';
import felaPluginExpandShorthand from 'fela-plugin-expand-shorthand';
import felaPluginFriendlyPseudoClass from 'fela-plugin-friendly-pseudo-class';

import namedKeys from './namedKeys';

const defaultUnit = 'px';

export const plugins: TPlugin[] = [
    felaPluginExtend(),
    felaPluginEmbedded(),
    felaPluginFriendlyPseudoClass(),
    felaPluginNamedKeys(namedKeys),
    felaPluginExpandShorthand(true),
    felaPluginPlaceholderPrefixer(),
    felaPluginFallbackValue(),
    felaPluginUnit(defaultUnit),

    // felaPluginValidator should be the last plugin
    process.env.NODE_ENV === 'development' &&
        felaPluginValidator({
            logInvalid: true,
            deleteInvalid: false,
            useCSSLint: false,
        }),

    // NOTE: It's disabled because it deletes rules that are valid, such a 'display: grid'
    // felaPluginPrefixer(),
].filter(Boolean);
