import useLocalStorage from '@/hooks/useLocalStorage.js';
import { STORAGE_KEYS } from '@/constants/storage-keys.js';
import { SEED_CONTACTS } from './contacts.seed.js';

export default function useContacts() {
  return useLocalStorage(STORAGE_KEYS.contacts, SEED_CONTACTS);
}
