import { lazy } from 'react';

// Реестр страниц админ-панели. Каждая страница грузится отдельным чанком (lazy).
// Чтобы добавить раздел: создайте папку в src/features/ и добавьте строку сюда.
export const PAGES = [
  { id: 'requests', label: 'Обращения', Component: lazy(() => import('@/features/requests')) },
  { id: 'doctors', label: 'Врачи', Component: lazy(() => import('@/features/doctors')) },
  { id: 'departments', label: 'Отделения', Component: lazy(() => import('@/features/departments')) },
  { id: 'services', label: 'Услуги и цены', Component: lazy(() => import('@/features/services')) },
  { id: 'documents', label: 'Документы', Component: lazy(() => import('@/features/documents')) },
  { id: 'contacts', label: 'Контакты', Component: lazy(() => import('@/features/contacts')) },
];

export const DEFAULT_PAGE_ID = 'requests';
