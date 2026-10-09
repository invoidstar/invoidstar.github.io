export type Lang = 'en' | 'zh';
export type Section = 'home' | 'publications' | 'projects' | 'about';

const base = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');

export function route(section: Section = 'home', lang: Lang = 'en'): string {
  const langPrefix = lang === 'zh' ? 'zh/' : '';
  const slug = section === 'home' ? '' : section + '/';
  return base + langPrefix + slug;
}

export function asset(path: string): string {
  return base + path.replace(/^\/+/, '');
}
