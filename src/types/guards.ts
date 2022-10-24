import { isObject } from 'lodash';

import type { IntlMessage } from './index';

export const isIntlMessage = (object: any): object is IntlMessage => isObject(object);

export const isTruthy = <T extends any>(obj: null | undefined | boolean | T): obj is T => Boolean(obj);

export const isOneOf = <T>(list: T[], value: unknown): value is T => list.includes(value as T);

export const isDefined = <T extends unknown>(value: T) => value !== null && value !== undefined;

type PayloadErrorAction = { payload: { error: any } };
type ErrorAction = { error: any };

export function isFailureAction<SA, FA extends PayloadErrorAction | ErrorAction>(action: SA | FA): action is FA {
    return (action as ErrorAction).error !== undefined || (action as PayloadErrorAction).payload?.error !== undefined;
}
