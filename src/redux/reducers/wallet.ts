import { Actions } from '../actions';
import { Expenses } from '../../types';

const INITIAL_STATE = {
  currencies: [] as string[],
  expenses: [] as Expenses[],
  editor: false,
  idToEdit: 0,
  cache: {},
};

const walletData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Actions.SET_WALLET_DATA:
      return {
        ...state,
        currencies: action.payload.currencies,
        cache: action.payload.param,
      };
    case Actions.SET_WALLET_EXPENSES:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    default: return state;
  }
};

export default walletData;
