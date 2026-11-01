import useLocalStorage from '@/hooks/useLocalStorage.js';
import { STORAGE_KEYS } from '@/constants/storage-keys.js';
import { SEED_SERVICES } from './services.seed.js';

export default function useServices() {
  return useLocalStorage(STORAGE_KEYS.services, SEED_SERVICES);
}
