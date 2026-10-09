/**
 * Small, deterministic pagination helpers.
 * Pure functions are shared by the browser and the build verification tests.
 */
export const PAGE_SIZE = 10;

export function pageCount(total, size = PAGE_SIZE) {
  return Math.max(1, Math.ceil(Math.max(0, total) / size));
}

export function normalizePage(value, total, size = PAGE_SIZE) {
  const parsed = Number(value);
  if (!Number.isSafeInteger(parsed) || parsed < 1) return 1;
  return Math.min(parsed, pageCount(total, size));
}

export function paginate(items, page, size = PAGE_SIZE) {
  const current = normalizePage(page, items.length, size);
  return items.slice((current - 1) * size, current * size);
}
