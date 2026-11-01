import useLocalStorage from '@/hooks/useLocalStorage.js';
import { STORAGE_KEYS } from '@/constants/storage-keys.js';
import { SEED_REQUESTS } from './requests.seed.js';

export default function useRequests() {
  return useLocalStorage(STORAGE_KEYS.requests, SEED_REQUESTS);
}
