import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type UserType = {
  email:string;
};

export type RootType = {
  user: UserType;
  wallet: WalletType;
};

export type ReduxState = {
  isFetching: boolean,
  movies: string,
};

export type WalletType = {
  currencies: string[];
  expenses: Expense[];
  editor: boolean;
  idToEdit: number;
  cache: APIResponse;
};

export type Expense = {
  id: number;
  value: string;
  description: string;
  currency: string;
  method: string;
  tag: string;
  exchangeRates: APIResponse,
};

export type APIResponse = {
  [key:string]: Currency
};

type Currency = {
  code: string;
  name: string;
  ask: string;
};

export type GlobalStateType = {
  user: UserType;
  wallet: WalletType;
};

export type ContextType = {
  form: Expense;
  isEditing: boolean;
  setForm: (param: Expense) => void;
  setIsEditing: (param: boolean)=> void;
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
