import { UserType } from '../../types';

export enum Actions {
  SET_USER_DATA = 'SET_USER_DATA',
}

export type SetUserType = {
  type: string;
  payload: string;
};

export const setUserData = (param: string) => {
  return {
    type: Actions.SET_USER_DATA,
    payload: param,
  } as SetUserType;
};
