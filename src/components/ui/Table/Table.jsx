import './Table.css';

export function Table({ children }) {
  return <div className="data-table">{children}</div>;
}

// head — строка заголовков, empty — строка «ничего нет». Колонки задаются className или style.
export function TableRow({ head, empty, className = '', ...props }) {
  const mods = [head && 'data-table__row--head', empty && 'data-table__row--empty'];
  return <div className={['data-table__row', ...mods, className].filter(Boolean).join(' ')} {...props} />;
}
