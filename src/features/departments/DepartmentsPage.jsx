import CrudPage from '@/components/crud';
import useDepartments from './useDepartments.js';

const FIELDS = [{ key: 'name', label: '', col: 'Название' }];

export default function DepartmentsPage() {
  const [departments, setDepartments] = useDepartments();
  return (
    <CrudPage
      title="Отделения"
      subtitle="Отделения используются для врачей и услуг."
      addTitle="Добавить отделение"
      fields={FIELDS}
      items={departments}
      setItems={setDepartments}
    />
  );
}
