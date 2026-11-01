import { Suspense, useState } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { LoginPage, useAuth } from '@/features/auth';
import { PAGES, DEFAULT_PAGE_ID } from './pages.js';

export default function App() {
  const { isAuthenticated, signIn, signOut } = useAuth();
  const [pageId, setPageId] = useState(DEFAULT_PAGE_ID);

  if (!isAuthenticated) return <LoginPage onSuccess={signIn} />;

  const { Component: Page } = PAGES.find((p) => p.id === pageId) ?? PAGES[0];

  return (
    <AdminLayout pages={PAGES} activeId={pageId} onNavigate={setPageId} onLogout={signOut}>
      <Suspense fallback={<p>Загрузка…</p>}>
        <Page />
      </Suspense>
    </AdminLayout>
  );
}
