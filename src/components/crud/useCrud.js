import { useState } from 'react';
import { uid } from '@/lib/id.js';

// Состояние и действия для таблицы «добавить / изменить / скрыть / удалить».
export default function useCrud({ fields, items, setItems }) {
  const empty = Object.fromEntries(fields.map((f) => [f.key, '']));
  const [form, setForm] = useState(empty);
  const [editId, setEditId] = useState(null);
  const [draft, setDraft] = useState(empty);

  const isValid = (data) => fields.every((f) => String(data[f.key]).trim() !== '');

  const updateForm = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));
  const updateDraft = (key, value) => setDraft((prev) => ({ ...prev, [key]: value }));

  const add = (e) => {
    e.preventDefault();
    if (!isValid(form)) return;
    setItems([...items, { id: uid(), visible: true, ...form }]);
    setForm(empty);
  };

  const startEdit = (item) => {
    setEditId(item.id);
    setDraft(Object.fromEntries(fields.map((f) => [f.key, item[f.key]])));
  };

  const saveEdit = () => {
    if (!isValid(draft)) return;
    setItems(items.map((it) => (it.id === editId ? { ...it, ...draft } : it)));
    setEditId(null);
  };

  const toggleVisible = (id) =>
    setItems(items.map((it) => (it.id === id ? { ...it, visible: !it.visible } : it)));

  const remove = (id) => setItems(items.filter((it) => it.id !== id));

  return { form, draft, editId, updateForm, updateDraft, add, startEdit, saveEdit, toggleVisible, remove };
}
