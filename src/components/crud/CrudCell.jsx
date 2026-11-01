import { formatPrice } from '@/lib/format.js';
import { safeHref } from '@/lib/url.js';

// Как показывать значение поля в таблице
export default function CrudCell({ field, item }) {
  const value = item[field.key];
  if (field.options) return field.options.find((o) => o.value === value)?.label ?? '—';
  if (field.link) {
    return (
      <a href={safeHref(value)} target="_blank" rel="noreferrer">
        Открыть файл
      </a>
    );
  }
  if (field.type === 'number') return formatPrice(value);
  return value;
}
