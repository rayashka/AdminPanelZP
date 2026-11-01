import { useMemo } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage.js';
import { STORAGE_KEYS } from '@/constants/storage-keys.js';
import { SEED_DEPARTMENTS } from './departments.seed.js';

export default function useDepartments() {
  return useLocalStorage(STORAGE_KEYS.departments, SEED_DEPARTMENTS);
}

// Список отделений для выпадающих полей (врачи, услуги)
export function useDepartmentOptions() {
  const [departments] = useDepartments();
  return useMemo(
    () => departments.map((d) => ({ value: String(d.id), label: d.name })),
    [departments]
  );
}
