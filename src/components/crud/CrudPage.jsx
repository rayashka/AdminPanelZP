import PageHeader from '@/components/ui/PageHeader';
import Panel from '@/components/ui/Panel';
import { Table, TableRow } from '@/components/ui/Table';
import Button from '@/components/ui/Button';
import Switch from '@/components/ui/Switch';
import FieldInput from './FieldInput.jsx';
import CrudCell from './CrudCell.jsx';
import useCrud from './useCrud.js';
import './CrudPage.css';

/**
 * Универсальная страница-справочник.
 * fields: [{ key, label, col?, type?, options?, link? }]
 *   label — подпись поля в форме, col — заголовок колонки (по умолчанию label),
 *   options — выпадающий список [{ value, label }], link — показывать как ссылку.
 */
export default function CrudPage({ title, subtitle, addTitle, fields, items, setItems }) {
  const crud = useCrud({ fields, items, setItems });
  const columns = fields.map(() => '1fr').join(' ');

  return (
    <>
      <PageHeader title={title} subtitle={subtitle} />

      <Panel as="form" onSubmit={crud.add}>
        <b>{addTitle}</b>
        <div className="crud-add" style={{ '--cols': `${columns} auto` }}>
          {fields.map((f) => (
            <label key={f.key}>
              {f.label}
              <FieldInput field={f} value={crud.form[f.key]} onChange={(v) => crud.updateForm(f.key, v)} />
            </label>
          ))}
          <Button type="submit">Добавить</Button>
        </div>
      </Panel>

      <Table>
        <TableRow head className="crud-row" style={{ '--cols': `${columns} 150px 170px` }}>
          {fields.map((f) => (
            <span key={f.key}>{f.col || f.label}</span>
          ))}
          <span className="cell--center">Скрыть/Показать</span>
          <span />
        </TableRow>

        {items.map((item) => {
          const editing = crud.editId === item.id;
          return (
            <TableRow key={item.id} className="crud-row" style={{ '--cols': `${columns} 150px 170px` }}>
              {fields.map((f) => (
                <span key={f.key}>
                  {editing ? (
                    <FieldInput field={f} value={crud.draft[f.key]} onChange={(v) => crud.updateDraft(f.key, v)} />
                  ) : (
                    <CrudCell field={f} item={item} />
                  )}
                </span>
              ))}
              <span className="cell--center">
                <Switch checked={item.visible} onChange={() => crud.toggleVisible(item.id)} label="Скрыть/Показать" />
              </span>
              <span className="cell--actions">
                {editing ? (
                  <Button variant="outline" onClick={crud.saveEdit}>Сохранить</Button>
                ) : (
                  <Button variant="outline" onClick={() => crud.startEdit(item)}>Изменить</Button>
                )}
                <Button variant="danger" onClick={() => crud.remove(item.id)}>Удалить</Button>
              </span>
            </TableRow>
          );
        })}

        {items.length === 0 && <TableRow empty>Список пуст</TableRow>}
      </Table>
    </>
  );
}
