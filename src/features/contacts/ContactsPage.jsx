import { useState } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Panel from '@/components/ui/Panel';
import Button from '@/components/ui/Button';
import { CONTACT_FIELDS } from './contacts.seed.js';
import useContacts from './useContacts.js';
import './ContactsPage.css';

export default function ContactsPage() {
  const [saved, setSaved] = useContacts();
  const [form, setForm] = useState(saved);
  const [done, setDone] = useState(false);

  const change = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value });
    setDone(false);
  };

  const submit = (e) => {
    e.preventDefault();
    setSaved(form);
    setDone(true);
  };

  return (
    <>
      <PageHeader title="Контакты" subtitle="Основные контакты, которые показываются на лендинге." />
      <Panel as="form" className="contacts-form" onSubmit={submit}>
        {CONTACT_FIELDS.map((f) => (
          <label key={f.key}>
            {f.label}
            <input value={form[f.key]} onChange={change(f.key)} />
          </label>
        ))}
        <div className="contacts-save">
          <Button type="submit">Сохранить</Button>
          {done && <span className="contacts-saved">Сохранено</span>}
        </div>
      </Panel>
    </>
  );
}
