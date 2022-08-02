import { createSelector } from 'reselect';
import { ConnectionStatus } from '../../constants';

export const networkStatusSelector = state => state.network.status;

export const isOnlineSelector = createSelector(networkStatusSelector, status => status === ConnectionStatus.ONLINE);
export const isOfflineSelector = createSelector(networkStatusSelector, status => status === ConnectionStatus.OFFLINE);
