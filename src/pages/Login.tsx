import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function Login() {
  const [form, setForm] = useState(INITIAL_STATE);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const { email, password } = form;

  const handleOnChange = (
    event: React.ChangeEvent<
    HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
    >,
  ) => {
    const inputValue = event.target.value as string;
    const inputName = event.target.name;
    const temp = { ...form, [inputName]: inputValue };
    setForm(temp);
  };

  const isEnable = () => {
    const regexTestEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return !(regexTestEmail.test(email) && password.length >= 6);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setUserData(form.email));
    nav('/carteira');
  };

  return (
    <form className="container" onSubmit={ handleOnSubmit }>
      <input
        name="email"
        type="email"
        data-testid="email-input"
        placeholder="Email"
        value={ email }
        onChange={ handleOnChange }
      />
      <input
        name="password"
        type="password"
        data-testid="password-input"
        placeholder="Password"
        value={ password }
        onChange={ handleOnChange }
      />
      <button
        type="submit"
        disabled={ isEnable() }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
