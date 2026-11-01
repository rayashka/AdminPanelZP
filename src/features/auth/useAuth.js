import useLocalStorage from '@/hooks/useLocalStorage.js';
import { STORAGE_KEYS } from '@/constants/storage-keys.js';

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage(STORAGE_KEYS.auth, false);
  return {
    isAuthenticated,
    signIn: () => setIsAuthenticated(true),
    signOut: () => setIsAuthenticated(false),
  };
}
