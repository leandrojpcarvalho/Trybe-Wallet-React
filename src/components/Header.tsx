import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootType } from '../types';

function Header() {
  const [total, setTotal] = useState(0);
  const { email, expenses, cache } = useSelector((state:RootType) => {
    return {
      ...state.user,
      ...state.wallet,
    };
  });
  useEffect(() => {
    const temp = expenses.reduce((acc, currentExpense) => {
      console.log(cache[currentExpense.currency]);
      acc += currentExpense.value * Number(cache[currentExpense.currency].ask);
      return acc;
    }, 0);
    setTotal(temp);
    console.log(temp);
  }, [expenses]);

  return (
    <header>
      <p data-testid="email-field">{email}</p>
      <p data-testid="total-field">{total.toFixed(2)}</p>
      <p data-testid="header-currency-field">BRL</p>
    </header>
  );
}

export default Header;
