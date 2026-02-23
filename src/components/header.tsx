import * as React from "react"
import DashButton from './DashButton';
import { StaticImage } from "gatsby-plugin-image";

export const Header = ({
  siteTitle = "Rick Segrest",
  currentView,
  setCurrentView,
  navigateTo
}: {
  siteTitle: string,
  currentView: string,
  setCurrentView: React.Dispatch<React.SetStateAction<string>>,
  navigateTo: (view: string) => void
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:gap-6">
      <StaticImage
        className="rounded-2xl mx-auto md:mx-0 mb-4 md:mb-0 md:ml-8"
        src="../images/rs-brand-emblem.png"
        width={256}
        alt="Rick Segrest"
      />

      <div
        className="w-full max-w-[20rem] md:max-w-none md:w-[36rem] px-2 md:pl-6 md:mr-8 flex justify-center md:justify-start p-4 gap-1 md:gap-12 rounded-xl bg-black/40 shadow-[inset_0_4px_10px_rgba(0,0,0,0.8)] border-t border-white/10">
        <DashButton
          label="SYS"
          active={currentView === 'home'}
          onClick={() => {
            setCurrentView('home');
            navigateTo('home');
          }}
        />
        <DashButton
          label="PROJECTS"
          active={currentView === 'projects'}
          onClick={() => {
            setCurrentView('projects');
            navigateTo('projects');
          }}
        />
        <DashButton
          label="RESUME"
          active={currentView === 'resume'}
          onClick={() => {
            setCurrentView('resume');
            navigateTo('resume');
          }}
        />
        <DashButton
          label="COMM"
          active={currentView === 'contact'}
          onClick={() => {
            setCurrentView('contact');
            navigateTo('contact');
          }}
        />
      </div>
    </div>
  );
}

export default Header
