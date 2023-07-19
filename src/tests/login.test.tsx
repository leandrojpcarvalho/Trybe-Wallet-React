import { expect } from 'vitest';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import { renderWithRouter } from './helpers/renderWith';
import store from '../redux';
import App from '../App';

describe('testa a pagina de login', () => {
  it('testa se aparece os inputs e o botão', () => {
    renderWithRouter(
      <Provider store={ store }>
        <App />
      </Provider>,
    );

    screen.getByPlaceholderText(/email/i);
    screen.getByPlaceholderText(/password/i);
    expect(screen.getByRole('button', { name: /entrar/i })).toBeDisabled();
  });
  it('testa se ao clicar em entrar é rederizado uma nova pagina', async () => {
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
    expect(entrar).toBeEnabled();
    await userEvent.click(entrar);
    expect(await screen.findByText(/alguem@algo.com/i)).toBeInTheDocument();
  });
});
