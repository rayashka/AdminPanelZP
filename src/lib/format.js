// '2026-10-29' -> '2026.10.29'
export const formatDate = (iso) => iso.replaceAll('-', '.');

// 120000 -> '120 000 ₽'
export const formatPrice = (value) => `${Number(value).toLocaleString('ru-RU')} ₽`;
