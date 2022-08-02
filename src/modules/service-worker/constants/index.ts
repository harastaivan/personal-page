import { isEnvDevelopment } from 'constants/index';

const INVERAL_DEV = 1e3 * 60 * 5; // 5 minutes
const INVERVAL_NON_DEV = 1e3 * 60 * 30; // 30 minutes

export const UPDATE_CHECKER_INTERVAL = isEnvDevelopment ? INVERAL_DEV : INVERVAL_NON_DEV;
export const UPDATE_CHECKER_MINIMAL_INVERAL = 1e3 * 60; // 1 minute
