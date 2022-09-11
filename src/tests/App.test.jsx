import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import render from './utils/renderWithRouterAndRedux';

// render(<App />, {location: '/dashboard'})

describe('<App />', () => {
  it('testa se tem um título', () => {
    render(<App />);

    const loginTitle = screen.getByRole('heading', { level: 2, name: /login/i });

    expect(loginTitle).toBeInTheDocument();
  });

  it('testa se tem dois inputs', () => {
    render(<App />);

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    // const passwordInput = screen.getByRole('textbox', { name: /Senha/i });
    const passwordInput = screen.getByTestId('password');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('testa se ao clicar em Entrar ele atualiza o estado do redux', async () => {
    const { store } = render(<App />);

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const passwordInput = screen.getByTestId('password');
    const loginButton = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(emailInput, 'miguel@example.com');
    userEvent.type(passwordInput, '123456');

    userEvent.click(loginButton);

    await waitFor(() => {
      expect(store.getState()).toEqual({
        user: {
          email: 'miguel@example.com',
          password: '123456',
        },
      });
    }, {
      timeout: 5000,
    });
  });
});
