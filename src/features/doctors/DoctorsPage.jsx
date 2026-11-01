import { useMemo } from 'react';
import CrudPage from '@/components/crud';
import { useDepartmentOptions } from '@/features/departments/useDepartments.js';
import useDoctors from './useDoctors.js';

export default function DoctorsPage() {
  const [doctors, setDoctors] = useDoctors();
  const departmentOptions = useDepartmentOptions();

  const fields = useMemo(
    () => [
      { key: 'name', label: 'ФИО' },
      { key: 'specialty', label: 'Специальность' },
      { key: 'department', label: 'Отделение', options: departmentOptions },
    ],
    [departmentOptions]
  );

  return (
    <CrudPage
      title="Врачи"
      subtitle="Скрытые врачи не показываются на сайте."
      addTitle="Добавить врача"
      fields={fields}
      items={doctors}
      setItems={setDoctors}
    />
  );
}
