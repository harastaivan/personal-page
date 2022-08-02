import { Antonio } from '@ackee/antonio-core';

import config from 'config';

const api = new Antonio({
    baseURL: config.api.base,
});

export { api };
