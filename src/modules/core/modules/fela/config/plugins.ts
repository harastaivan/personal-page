import felaPluginValidator from 'fela-plugin-validator';
import felaPluginUnit from 'fela-plugin-unit';
import felaPluginNamedKeys from 'fela-plugin-named-keys';
import felaPluginFriendlyPseudoClass from 'fela-plugin-friendly-pseudo-class';
import felaPluginEmbedded from 'fela-plugin-embedded';
import felaPluginExtend from 'fela-plugin-extend';

import { isTruthy } from 'types/guards';

import namedKeys from './namedKeys';

const defaultUnit = 'px';

export const plugins = [
    // docs: https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-unit
    felaPluginUnit(defaultUnit),

    // docs: https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-friendly-pseudo-class
    felaPluginFriendlyPseudoClass(),

    // docs: https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-friendly-pseudo-class
    felaPluginNamedKeys(namedKeys),

    // docs: https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-embedded
    felaPluginEmbedded(),

    // https://github.com/robinweser/fela/tree/master/packages/fela-plugin-extend
    felaPluginExtend(),

    // felaPluginValidator should be the last plugin
    process.env.NODE_ENV === 'development' &&
        felaPluginValidator({
            logInvalid: false,
            deleteInvalid: false,
            useCSSLint: true,
        }),
].filter(isTruthy);
