import { useState } from 'react';
import { checkCredentials } from './auth.config.js';
import './LoginPage.css';

export default function LoginPage({ onSuccess }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (checkCredentials(login, password)) onSuccess();
    else setError('Неверный логин или пароль');
  };

  return (
    <div className="login-bg">
      <form className="login-card" onSubmit={submit}>
        <h1>Клиника «Здоровое поколение»</h1>
        <p>Войдите, чтобы управлять сайтом клиники.</p>

        <label htmlFor="login">Логин</label>
        <input
          id="login"
          autoComplete="username"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Ваш логин..."
        />

        <label htmlFor="password">Пароль</label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ваш пароль..."
        />

        {error && (
          <div className="login-error" role="alert">
            {error}
          </div>
        )}
        <button type="submit" className="login-btn">
          Войти
        </button>
      </form>
    </div>
  );
}
