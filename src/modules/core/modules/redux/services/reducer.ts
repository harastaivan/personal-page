import { reducer as translateReducer } from 'modules/core/modules/localization';
import { connectRouterWithHistory } from 'modules/core/modules/router';

import reducers from 'services/reducers';

export default {
    ...reducers,
    translate: translateReducer,
    router: connectRouterWithHistory,
};
