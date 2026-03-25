import { lazy, Suspense } from 'react';
import { NavigationV4 } from '@/app/components/NavigationV4';
import { HeroV5 } from '@/app/components/HeroV5';
import { SeoHead } from '@/app/components/SeoHead';

const AboutV4 = lazy(() =>
  import('@/app/components/AboutV4').then((m) => ({ default: m.AboutV4 })),
);
const ExperienceV4 = lazy(() =>
  import('@/app/components/ExperienceV4').then((m) => ({ default: m.ExperienceV4 })),
);
const SkillsV4 = lazy(() =>
  import('@/app/components/SkillsV4').then((m) => ({ default: m.SkillsV4 })),
);
const ProjectsV4 = lazy(() =>
  import('@/app/components/ProjectsV4').then((m) => ({ default: m.ProjectsV4 })),
);
const ContactV4 = lazy(() =>
  import('@/app/components/ContactV4').then((m) => ({ default: m.ContactV4 })),
);

function BelowFoldFallback() {
  return (
    <div
      className="min-h-[30vh] w-full bg-white dark:bg-[#0a0a0a]"
      aria-hidden
    />
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] antialiased">
      <SeoHead />
      <NavigationV4 />
      <main id="main-content">
        <HeroV5 />
        <Suspense fallback={<BelowFoldFallback />}>
          <AboutV4 />
          <ExperienceV4 />
          <SkillsV4 />
          <ProjectsV4 />
          <ContactV4 />
        </Suspense>
      </main>
    </div>
  );
}
