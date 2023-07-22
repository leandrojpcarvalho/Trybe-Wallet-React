import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect } from 'react';
import { editExpense, requestCurrencies, setNewExpense } from '../redux/actions';
import { Dispatch, GlobalStateType } from '../types';
import { FORM_INITIAL_STATE, handleOnChange } from '../utils';
import { Test } from '../context/test';

function WalletForm() {
  const dispatch = useDispatch() as Dispatch;
  const { form, isEditing, setForm, setIsEditing } = useContext(Test);
  const { value, description, currency, method, tag } = form;
  const { currencies, cache, expenses } = useSelector((state: GlobalStateType) => {
    return {
      ...state.user,
      ...state.wallet,
    };
  });
  useEffect(() => {
    dispatch(requestCurrencies());
  }, []);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(requestCurrencies());
    test();
  };

  const test = () => {
    const temp = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: cache,
    };
    dispatch(setNewExpense(temp));
    setForm(FORM_INITIAL_STATE);
  };

  const handleClick = () => {
    dispatch(editExpense(form));
    setForm(FORM_INITIAL_STATE);
    setIsEditing(false);
  };

  const buttonAddOrEditExpense = () => {
    if (isEditing) {
      return (
        <div
          aria-hidden="true"
          onClick={ handleClick }
        >
          Editar despesa
        </div>
      );
    }
    return (
      <button type="submit">
        Adicionar despesa
      </button>
    );
  };

  // useEffect(() => {
  //   if (Number(value) > 0) {
  //     test();
  //   }
  // }, [cache]);

  return (
    <div>
      <form
        onChange={ (event) => handleOnChange(event, setForm, form) }
        onSubmit={ handleOnSubmit }
      >
        <input
          type="number"
          name="value"
          id=""
          data-testid="value-input"
          placeholder="Digite o valor da despesa"
          value={ value }
        />
        <input
          type="text"
          name="description"
          data-testid="description-input"
          placeholder="Digite a descrição da despesa"
          value={ description }
        />
        <select
          name="currency"
          id=""
          data-testid="currency-input"
        >
          {currencies.map((coin, index) => (
            <option
              key={ index }
              value={ coin }
            >
              {coin}
            </option>
          ))}
        </select>
        <select name="method" id="" data-testid="method-input">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select name="tag" id="" data-testid="tag-input">
          <option value="Alimentação">Alimentação</option>
          <option value="Saúde">Saúde</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Lazer">Lazer</option>
          <option value="Transporte">Transporte</option>
        </select>
        {buttonAddOrEditExpense()}
      </form>
    </div>
  );
}

export default WalletForm;
