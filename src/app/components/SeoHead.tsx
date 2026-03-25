import { useLayoutEffect } from 'react';
import {
  SEO_DESCRIPTION,
  SEO_EMAIL,
  SEO_GITHUB,
  SEO_KEYWORDS,
  SEO_LINKEDIN,
  SEO_OG_IMAGE_PATH,
  SEO_PERSON_NAME,
  SEO_TITLE,
  SEO_TWITTER_HANDLE,
  getSiteOrigin,
} from '@/app/seoConfig';

function ensureMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function ensureLink(rel: string, href: string, extra?: Record<string, string>) {
  const hrefSel = `link[rel="${rel}"]`;
  let el = document.head.querySelector<HTMLLinkElement>(hrefSel);
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
  if (extra) {
    Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v));
  }
}

const JSON_LD_ID = 'portfolio-jsonld-person';

export function SeoHead() {
  useLayoutEffect(() => {
    const origin = getSiteOrigin();
    const canonical = `${origin}${window.location.pathname || '/'}`;

    document.title = SEO_TITLE;
    document.documentElement.lang = 'en';

    ensureMeta('name', 'description', SEO_DESCRIPTION);
    ensureMeta('name', 'keywords', SEO_KEYWORDS);
    ensureMeta('name', 'author', SEO_PERSON_NAME);
    ensureMeta('name', 'robots', 'index, follow');
    ensureMeta('name', 'twitter:card', 'summary_large_image');
    ensureMeta('name', 'twitter:title', SEO_TITLE);
    ensureMeta('name', 'twitter:description', SEO_DESCRIPTION);
    ensureMeta('name', 'twitter:creator', SEO_TWITTER_HANDLE);

    ensureMeta('property', 'og:type', 'website');
    ensureMeta('property', 'og:title', SEO_TITLE);
    ensureMeta('property', 'og:description', SEO_DESCRIPTION);
    ensureMeta('property', 'og:url', canonical);
    ensureMeta('property', 'og:locale', 'en_US');
    ensureMeta('property', 'og:site_name', `${SEO_PERSON_NAME} — Portfolio`);

    ensureLink('canonical', canonical);

    const ogImageUrl = `${origin}${SEO_OG_IMAGE_PATH}`;
    ensureMeta('property', 'og:image', ogImageUrl);
    ensureMeta('property', 'og:image:width', '1200');
    ensureMeta('property', 'og:image:height', '630');
    ensureMeta('property', 'og:image:alt', `${SEO_PERSON_NAME} — Front-end & web developer portfolio`);
    ensureMeta('name', 'twitter:image', ogImageUrl);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${origin}/#website`,
          url: origin,
          name: SEO_TITLE,
          description: SEO_DESCRIPTION,
          inLanguage: 'en',
          publisher: { '@id': `${origin}/#person` },
        },
        {
          '@type': 'WebPage',
          '@id': `${canonical}#webpage`,
          url: canonical,
          name: SEO_TITLE,
          description: SEO_DESCRIPTION,
          isPartOf: { '@id': `${origin}/#website` },
          about: { '@id': `${origin}/#person` },
          inLanguage: 'en',
        },
        {
          '@type': 'Person',
          '@id': `${origin}/#person`,
          name: SEO_PERSON_NAME,
          url: origin,
          email: `mailto:${SEO_EMAIL}`,
          jobTitle: 'Front-End Developer',
          description: SEO_DESCRIPTION,
          sameAs: [SEO_LINKEDIN, SEO_GITHUB].filter(Boolean),
          knowsAbout: [
            'React',
            'TypeScript',
            'JavaScript',
            'Vue.js',
            'Astro',
            'WordPress',
            'Drupal',
            'Tailwind CSS',
            'Technical SEO',
            'Web performance',
            'GSAP',
            'Figma',
            'HTML',
            'CSS',
            'Node.js',
            'Front-end engineering',
          ],
        },
      ],
    };

    let script = document.getElementById(JSON_LD_ID);
    if (!script) {
      script = document.createElement('script');
      script.id = JSON_LD_ID;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, []);

  return null;
}
