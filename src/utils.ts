import { APIResponse } from './types';

type Event = React.FormEvent<HTMLFormElement> | React.ChangeEvent<
HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
>;

export function handleOnChange(event: Event, setState: any, state: any) {
  const inputValue = event.target.value;
  const inputName = event.target.name;
  const temp = { ...state, [inputName]: inputValue };
  setState(temp);
}

export const FORM_INITIAL_STATE = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: {} as APIResponse,
};
