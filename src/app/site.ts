const rawBase = import.meta.env.BASE_URL;

/** Vite always defines `BASE_URL`; normalize empty/undefined to root. */
const normalizedBase =
  typeof rawBase === 'string' && rawBase !== ''
    ? rawBase.endsWith('/')
      ? rawBase
      : `${rawBase}/`
    : '/';

/** File name inside `public/pdf/` (served as `/pdf/<name>`). */
export const CV_PDF_FILENAME = 'resume.pdf';

/** Suggested filename when recruiters save the CV from the browser. */
export const CV_DOWNLOAD_AS = 'Sebastian-Nino-Resume.pdf';

/**
 * Public URL for the résumé PDF. Place your file at `public/pdf/resume.pdf`
 * (or change `CV_PDF_FILENAME`). Without the file, the link returns 404.
 */
export const CV_PDF_URL = `${normalizedBase}pdf/${CV_PDF_FILENAME}`;

if (import.meta.env.DEV && typeof window !== 'undefined') {
  queueMicrotask(() => {
    void fetch(CV_PDF_URL, { method: 'HEAD', cache: 'no-store' }).then((res) => {
      if (res.status === 404) {
        console.warn(
          `[portfolio] CV missing (404): add public/pdf/${CV_PDF_FILENAME} — requested ${CV_PDF_URL}`,
        );
      }
    });
  });
}
