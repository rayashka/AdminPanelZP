import { useState } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import { Table, TableRow } from '@/components/ui/Table';
import Button from '@/components/ui/Button';
import { formatDate } from '@/lib/format.js';
import { STATUSES } from './requests.constants.js';
import useRequests from './useRequests.js';
import './RequestsPage.css';

function StatusOptions() {
  return STATUSES.map((s) => (
    <option key={s.value} value={s.value}>
      {s.label}
    </option>
  ));
}

export default function RequestsPage() {
  const [items, setItems] = useRequests();
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('');

  const shown = items.filter((r) => {
    const text = `${r.name} ${r.phone} ${r.service} ${r.message}`.toLowerCase();
    return text.includes(query.toLowerCase()) && (!status || r.status === status);
  });

  const countBy = (value) => items.filter((r) => r.status === value).length;
  const changeStatus = (id, next) =>
    setItems(items.map((r) => (r.id === id ? { ...r, status: next } : r)));
  const remove = (id) => setItems(items.filter((r) => r.id !== id));

  return (
    <>
      <PageHeader title="Обращения" subtitle="Заявки, которые оставили посетители лендинга." />

      <div className="requests-stats">
        <div className="requests-stat"><b>{countBy('new')}</b>Новых</div>
        <div className="requests-stat"><b>{countBy('work')}</b>В работе</div>
        <div className="requests-stat"><b>{items.length}</b>Всего</div>
      </div>

      <div className="requests-filters">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск по имени, телефону или услуге"
          aria-label="Поиск"
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Статус">
          <option value="">Все статусы</option>
          <StatusOptions />
        </select>
      </div>

      <Table>
        <TableRow head className="requests-row">
          <span>Пациент</span>
          <span>Услуга и сообщение</span>
          <span className="cell--center">Дата</span>
          <span className="cell--center">Статус</span>
          <span />
        </TableRow>

        {shown.map((r) => (
          <TableRow key={r.id} className="requests-row">
            <span>
              <div>{r.name}</div>
              <small>{r.phone}</small>
            </span>
            <span>
              <div>{r.service}</div>
              <small>{r.message}</small>
            </span>
            <span className="cell--center">{formatDate(r.date)}</span>
            <span className="cell--center">
              <select
                className={`status-select status-select--${r.status}`}
                value={r.status}
                onChange={(e) => changeStatus(r.id, e.target.value)}
                aria-label="Статус обращения"
              >
                <StatusOptions />
              </select>
            </span>
            <span className="cell--actions">
              <Button variant="danger" onClick={() => remove(r.id)}>Удалить</Button>
            </span>
          </TableRow>
        ))}

        {shown.length === 0 && <TableRow empty>Ничего не найдено</TableRow>}
      </Table>
    </>
  );
}
