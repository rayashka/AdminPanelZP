import { useMemo } from 'react';
import CrudPage from '@/components/crud';
import { useDepartmentOptions } from '@/features/departments/useDepartments.js';
import useServices from './useServices.js';

export default function ServicesPage() {
  const [services, setServices] = useServices();
  const departmentOptions = useDepartmentOptions();

  const fields = useMemo(
    () => [
      { key: 'name', label: 'Услуга' },
      { key: 'department', label: 'Отделение', options: departmentOptions },
      { key: 'price', label: 'Цена, ₽', col: 'Цена', type: 'number' },
    ],
    [departmentOptions]
  );

  return (
    <CrudPage
      title="Услуги и цены"
      subtitle="Услуги и цены, которые показываются на сайте."
      addTitle="Добавить услугу"
      fields={fields}
      items={services}
      setItems={setServices}
    />
  );
}
