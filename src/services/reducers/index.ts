import { reducer as network } from 'modules/network';

// NOTE:
// Do not use combineReducers() here,
// export reducers as plain object, not as a function.
const reducers = {
    network,
};

export default reducers;
