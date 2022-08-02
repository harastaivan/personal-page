import { createAction } from '@reduxjs/toolkit';

export const installationSuccess = createAction('sw/INSTALLATION_SUCCESS');

export const newVersionAvailable = createAction<() => void>('sw/NEW_VERSION_AVAILABLE');
