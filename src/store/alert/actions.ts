import { createAction } from '@reduxjs/toolkit';
import { AlertState } from './types';

export const setAlertState = createAction<AlertState>('@ALERT/SET_ALERT_STATE');

export const clearAndHideAlert = createAction('@ALERT/CLEAR_ALERT_STATE');
