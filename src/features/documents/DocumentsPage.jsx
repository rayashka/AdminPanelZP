import CrudPage from '@/components/crud';
import useDocuments from './useDocuments.js';

const FIELDS = [
  { key: 'name', label: 'Название документа', col: 'Название' },
  { key: 'url', label: 'Ссылка на файл', link: true },
];

export default function DocumentsPage() {
  const [documents, setDocuments] = useDocuments();
  return (
    <CrudPage
      title="Документы"
      subtitle="Документы, которые посетитель может открыть на сайте."
      addTitle="Добавить документ"
      fields={FIELDS}
      items={documents}
      setItems={setDocuments}
    />
  );
}
