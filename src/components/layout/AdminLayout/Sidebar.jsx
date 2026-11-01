export default function Sidebar({ pages, activeId, onNavigate, onLogout }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        Клиника “Здоровое поколение”
        <small>Управление сайтом</small>
      </div>

      <nav className="sidebar__nav" aria-label="Разделы">
        {pages.map((page) => {
          const active = page.id === activeId;
          return (
            <button
              key={page.id}
              type="button"
              className={`sidebar__link ${active ? 'is-active' : ''}`.trim()}
              aria-current={active ? 'page' : undefined}
              onClick={() => onNavigate(page.id)}
            >
              {page.label}
            </button>
          );
        })}
      </nav>

      <button type="button" className="sidebar__logout" onClick={onLogout}>
        Выйти
      </button>
    </aside>
  );
}
