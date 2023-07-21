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
  const { type, payload } = action;
  switch (type) {
    case Actions.SET_WALLET_DATA:
      return {
        ...state,
        currencies: payload.currencies,
        cache: payload.param,
      };
    case Actions.SET_WALLET_EXPENSES:
      return {
        ...state,
        expenses: [...state.expenses, payload],
      };
    case Actions.DELETE_WALLET_EXPENSES:
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== payload),
      };
    default: return state;
  }
};

export default walletData;
