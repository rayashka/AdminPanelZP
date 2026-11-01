import useLocalStorage from '@/hooks/useLocalStorage.js';
import { STORAGE_KEYS } from '@/constants/storage-keys.js';
import { SEED_DOCTORS } from './doctors.seed.js';

export default function useDoctors() {
  return useLocalStorage(STORAGE_KEYS.doctors, SEED_DOCTORS);
}
