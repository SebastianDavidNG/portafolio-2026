import { NavigationV4 } from '@/app/components/NavigationV4';
import { HeroV5 } from '@/app/components/HeroV5';
import { AboutV4 } from '@/app/components/AboutV4';
import { ExperienceV4 } from '@/app/components/ExperienceV4';
import { SkillsV4 } from '@/app/components/SkillsV4';
import { ProjectsV4 } from '@/app/components/ProjectsV4';
import { ContactV4 } from '@/app/components/ContactV4';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] antialiased">
      <NavigationV4 />
      <HeroV5 />
      <AboutV4 />
      <ExperienceV4 />
      <SkillsV4 />
      <ProjectsV4 />
      <ContactV4 />
    </div>
  );
}