// Допускаем только http(s), mailto и относительные ссылки — чтобы нельзя было подставить javascript:
export const safeHref = (url) => (/^(https?:\/\/|mailto:|\/|\.\/)/i.test(String(url).trim()) ? url : '#');
