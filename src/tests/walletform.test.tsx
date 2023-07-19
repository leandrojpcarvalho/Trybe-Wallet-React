import { Provider } from 'react-redux';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import store from '../redux';
import { renderWithRouter } from './helpers/renderWith';
import App from '../App';

describe('testa a pagina wallet', () => {
  it('testa se a pagina rederiza corretament o walletform', async () => {
    renderWithRouter(
      <Provider store={ store }>
        <App />
      </Provider>,
    );

    await userEvent.type(
      screen.getByPlaceholderText(/email/i),
      'alguem@algo.com',
    );
    await userEvent.type(
      screen.getByPlaceholderText(/password/i),
      '1234567',
    );
    const entrar = await screen.findByRole('button', { name: /entrar/i });
    await userEvent.click(entrar);

    const inputValue = await screen.findByPlaceholderText(/digite o valor da despesa/i);
    const inputDescription = await screen.findByPlaceholderText(/digite a descrição da despesa/i);
    const btn = await screen.findByRole('button', { name: /adicionar despesa/i });
    await userEvent.type(inputValue, '10');
    await userEvent.type(inputDescription, 'oia!');
    // await userEvent.click(btn);
  });
});
