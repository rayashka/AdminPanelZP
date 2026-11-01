import useLocalStorage from '@/hooks/useLocalStorage.js';
import { STORAGE_KEYS } from '@/constants/storage-keys.js';

export default function useDocuments() {
  return useLocalStorage(STORAGE_KEYS.documents, []);
}
