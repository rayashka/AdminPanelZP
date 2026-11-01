import { useEffect, useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const onNavClick = (e) => {
    if (e.target.closest('a')) setOpen(false);
  };

  return (
    <header className="header">
      <div className="header__inner">
        <a className="brand" href="#top" aria-label="Здоровое поколение">
          <span className="brand__orange">ЗДОРОВОЕ</span>
          <span className="brand__blue">ПОКОЛЕНИЕ</span>
        </a>

        <button
          className="burger"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav
          className={'nav' + (open ? ' is-open' : '')}
          id="nav"
          aria-label="Основная навигация"
          onClick={onNavClick}
        >
          <a href="#about">О клинике</a>
          <a href="#services">Услуги</a>
          <a className="nav__logo" href="#top" aria-label="На главную">
            <img src="/assets/logo.png" alt="" width="44" height="42" />
          </a>
          <a href="#departments">Отделения</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </div>
    </header>
  );
}
