import Sidebar from './Sidebar.jsx';
import './AdminLayout.css';

// Каркас админ-панели: боковое меню + область страницы.
// key={activeId} пересоздаёт страницу при переходе, поэтому формы и фильтры сбрасываются.
export default function AdminLayout({ pages, activeId, onNavigate, onLogout, children }) {
  return (
    <div className="layout">
      <Sidebar pages={pages} activeId={activeId} onNavigate={onNavigate} onLogout={onLogout} />
      <main className="layout__main" key={activeId}>
        {children}
      </main>
    </div>
  );
}
