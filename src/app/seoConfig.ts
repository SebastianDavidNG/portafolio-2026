/**
 * English SEO for https://sebastiandng.com/
 * Targets: front-end developer, web developer, React, WordPress, Drupal, etc.
 * Optional: VITE_SITE_URL=https://sebastiandng.com (no trailing slash) in production builds.
 */
export const SEO_SITE_ORIGIN = 'https://sebastiandng.com';

export const SEO_PERSON_NAME = 'Sebastián Niño';

export const SEO_TITLE =
  'Sebastián Niño | Front-End Developer & Web Developer | React, TypeScript, WordPress, Drupal';

export const SEO_DESCRIPTION =
  'Front-end and web developer based in Colombia. I build fast, accessible interfaces with React, TypeScript, and Tailwind — and ship WordPress, Drupal, Astro, and Vue projects with strong technical SEO and performance (Lighthouse). Open to freelance and full-time roles. Portfolio at sebastiandng.com.';

export const SEO_KEYWORDS = [
  'front-end developer',
  'frontend developer',
  'web developer',
  'React developer',
  'TypeScript developer',
  'WordPress developer',
  'Drupal developer',
  'Astro developer',
  'Vue developer',
  'Tailwind CSS',
  'technical SEO',
  'web performance',
  'Lighthouse',
  'Sebastián Niño',
  'Colombia web developer',
  'remote web developer',
  'UI developer',
  'Figma to code',
].join(', ');

export const SEO_TWITTER_HANDLE = '@sebastiandng';

export const SEO_LINKEDIN = 'https://www.linkedin.com/in/sebastiandavidninog/';

/** Matches LinkedIn handle; update if your GitHub username differs. */
export const SEO_GITHUB = 'https://github.com/sebastiandavidninog';

export const SEO_EMAIL = 'contacto@sebastiandng.com';

/** Open Graph / Twitter preview (1200×630). SVG works on many networks; for Facebook’s validator, export PNG as public/og-image.png and set SEO_OG_IMAGE_PATH below. */
export const SEO_OG_IMAGE_PATH = '/og-image.svg';

export const SEO_DEFAULT_ORIGIN = SEO_SITE_ORIGIN;

export function getSiteOrigin(): string {
  const env = import.meta.env.VITE_SITE_URL;
  if (typeof env === 'string' && /^https?:\/\//i.test(env)) {
    return env.replace(/\/$/, '');
  }
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return SEO_DEFAULT_ORIGIN;
}
