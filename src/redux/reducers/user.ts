import { Actions, SetUserType } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const userData = (state = INITIAL_STATE, action: SetUserType) => {
  switch (action.type) {
    case Actions.SET_USER_DATA:
      return {
        ...state,
        email: action.payload,
      };
    default: return state;
  }
};

export default userData;
