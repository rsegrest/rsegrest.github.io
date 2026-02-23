import * as React from "react"
import { Link } from "gatsby"
import GoldTrim from './GoldTrim';
import DashButton from './DashButton';
import * as STYLES from "../styles/style";
// import roosterEmblem from "../images/rooster-emblem.png";
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

    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      <StaticImage
        style={{
          marginLeft: '2rem',
          boxShadow: '0 0 12px 3px rgba(68,239,68,0.8),inset_0_2px_4px_rgba(255,255,255,0.4)',
          borderRadius: '1rem',
        }}
        src="../images/rs-brand-emblem.png" width={256} alt="Rick Segrest" />
      <div
        style={{
          width: '36rem',
          paddingLeft: '1.5rem',
          marginRight: '2rem',
        }}
        className="flex gap-12 p-4 rounded-xl bg-black/40 shadow-[inset_0_4px_10px_rgba(0,0,0,0.8)] border-t border-white/10">
        {/* <div>
          {currentView}
        </div> */}
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
