const COLUMNS = [
  {
    title: 'Продукт',
    links: [
      { label: 'Заглушка', href: '#' },
      { label: 'Заглушка', href: '#' },
      { label: 'Заглушка', href: '#' },
      { label: 'Заглушка', href: '#' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { label: 'О нас', href: '#about' },
      { label: 'Наши врачи', href: '#' },
      { label: 'Контакты', href: '#contacts' },
    ],
  },
  {
    title: 'Аккаунт',
    links: [
      { label: 'Вход', href: '#' },
      { label: 'Регистрация', href: '#' },
    ],
  },
];

function Social() {
  return (
    <ul className="social">
      <li>
        <a href="#" aria-label="Instagram">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#" aria-label="Telegram">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <circle cx="12" cy="12" r="11" fill="currentColor" />
            <path d="M5.5 11.8l11.2-4.3c.5-.2 1 .1.8.9l-1.9 9c-.1.6-.5.8-1 .5l-2.9-2.1-1.4 1.4c-.2.2-.3.3-.6.3l.2-3 5.4-4.9c.2-.2 0-.3-.4-.1l-6.7 4.2-2.9-.9c-.6-.2-.6-.6.2-.9z" fill="#fff" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#" aria-label="WhatsApp">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
            <path d="M3 21l1.4-4.6A9 9 0 1 1 8 19.7z" />
            <path d="M9 8.5c0 3 2.5 5.5 6 6.5l1.2-1.4-2-1-.8.8c-1-.4-2-1.4-2.4-2.4l.8-.8-1-2z" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </li>
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#top" className="footer__logo">
              <img src="/assets/logo.png" alt="" width="46" height="45" />
              <span><i>ЗДОРОВОЕ</i><br /><em>ПОКОЛЕНИЕ</em></span>
            </a>
            <p>Проблемы со здоровьем не беда, когда у вас есть наш номер.</p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l, i) => (
                  <li key={l.label + i}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__legal">
          <p>ИП Фамилия Имя Отчество · ОГРНИП ***************** · ИНН ************</p>
          <p>
            <a href="#">Политика конфиденциальности</a> · <a href="#">Пользовательское соглашение</a>
          </p>
        </div>

        <div className="footer__bottom">
          <Social />
          <small>© Здоровое Поколение 2026</small>
        </div>
      </div>
    </footer>
  );
}
