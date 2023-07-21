import { APIResponse, Dispatch, Expenses, UserType, WalletType } from '../../types';

export enum Actions {
  SET_USER_DATA = 'SET_USER_DATA',
  SET_WALLET_DATA = 'SET_WALLET_DATA',
  SET_WALLET_EXPENSES = 'SET_WALLET_EXPENSES',
  DELETE_WALLET_EXPENSES = 'DELETE_WALLET_EXPENSES',
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

async function fetchAPI(dispatch: Dispatch) {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    dispatch(setDataAPI(data));
  } catch (error) {
    return console.log(error.message);
  }
}

export const requestCurrencies = () => {
  return fetchAPI;
};

export const setDataAPI = (param: APIResponse[]) => {
  const currencies = Object.keys(param).filter((currency) => currency !== 'USDT');
  return {
    type: Actions.SET_WALLET_DATA,
    payload: {
      currencies,
      param,
    },
  };
};

export const setNewExpense = (param: Expenses) => {
  return {
    type: Actions.SET_WALLET_EXPENSES,
    payload: {
      ...param,
    },
  };
};

export const deleteExpense = (param: number) => {
  return {
    type: Actions.DELETE_WALLET_EXPENSES,
    payload: param,
  };
};
