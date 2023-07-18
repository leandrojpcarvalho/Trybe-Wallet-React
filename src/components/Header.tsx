import { useSelector } from 'react-redux';
import { RootType } from '../types';

function Header() {
  const { email } = useSelector((state:RootType) => {
    return {
      ...state.user,
    };
  });
  return (
    <header>
      <p data-testid="email-field">{email}</p>
      <p data-testid="total-field">0</p>
      <p data-testid="header-currency-field">BRL</p>
    </header>
  );
}

export default Header;
