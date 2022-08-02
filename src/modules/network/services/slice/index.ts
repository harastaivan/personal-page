import { createSlice } from '@reduxjs/toolkit';

import { ConnectionStatus } from '../../constants';
import getConnectionStatus from '../utils/getConnectionStatus';

const initialState = {
    status: getConnectionStatus(),
};

export const { actions, reducer } = createSlice({
    name: 'network',
    initialState,
    reducers: {
        setNetworkStatusOnline(state) {
            state.status = ConnectionStatus.ONLINE;
        },
        setNetworkStatusOffline(state) {
            state.status = ConnectionStatus.OFFLINE;
        },
    },
});
