import { useEffect, useState } from 'react';

// useState, значение которого хранится в localStorage.
// Если ключа нет или данные повреждены — берётся initialValue.
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // хранилище недоступно (приватный режим, переполнение) — работаем без сохранения
    }
  }, [key, value]);

  return [value, setValue];
}
