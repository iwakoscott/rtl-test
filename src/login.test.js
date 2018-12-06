import React from 'react';

import { render, cleanup, fireEvent } from 'react-testing-library';
import { Login } from './login';

afterEach(cleanup);

test('calls with user email and password', () => {
  const login = jest.fn();

  const { getByLabelText, getByText, container } = render(
    <Login login={login} />
  );

  const email = getByLabelText('Email');
  const password = getByLabelText('Password');
  const submitButton = getByText('Submit');

  fireEvent.change(email, { target: { value: 'leoq91@gmail.com' } });
  fireEvent.change(password, { target: { value: 'password' } });

  const form = container.querySelector('form');
  form.dispatchEvent(new Event('submit'));

  expect(login).toHaveBeenCalledTimes(1);
  expect(login).toHaveBeenCalledWith({
    email: email.value,
    password: password.value
  });
});
