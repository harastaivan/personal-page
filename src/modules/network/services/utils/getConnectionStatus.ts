import { ConnectionStatus } from '../../constants';

const getConnectionStatus = () => {
    // eslint-disable-next-line compat/compat
    const connection = navigator.connection as NetworkInformation & { downlink: number };

    if (!connection) {
        return navigator.onLine ? ConnectionStatus.ONLINE : ConnectionStatus.OFFLINE;
    }

    return connection.downlink === 0 || connection.type === 'none' ? ConnectionStatus.OFFLINE : ConnectionStatus.ONLINE;
};

export default getConnectionStatus;
