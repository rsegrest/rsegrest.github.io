import * as React from "react"
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
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

  const buttonPanelStyle = {
    width: '36rem',
    paddingLeft: '1.5rem',
    marginRight: '2rem',
  }
  const mobileButtonPanelStyle = {
    width: '20rem',
    paddingLeft: '1rem',
    marginRight: '1rem',
  }
  const buttonContainerClassNames = "flex gap-12 p-4 rounded-xl bg-black/40 shadow-[inset_0_4px_10px_rgba(0,0,0,0.8)] border-t border-white/10";
  const mobileButtonContainerClassNames = "flex p-4 rounded-xl bg-black/40 shadow-[inset_0_4px_10px_rgba(0,0,0,0.8)] border-t border-white/10";

  const logoContainerClassNames = "flex flex-col md:flex-row justify-between items-center gap-6";
  const mobileLogoContainerClassNames = "flex flex-col md:flex-row justify-between items-center";

  const logoStyle = {
    marginLeft: '2rem',
    boxShadow: '0 0 12px 3px rgba(68,239,68,0.8),inset_0_2px_4px_rgba(255,255,255,0.4)',
    borderRadius: '1rem',
  }
  const mobileLogoStyle = {
    boxShadow: '0 0 12px 3px rgba(68,239,68,0.8),inset_0_2px_4px_rgba(255,255,255,0.4)',
    borderRadius: '1rem',
    marginBottom: '1rem',
  }
  return (
    <div className={isMobile ? mobileLogoContainerClassNames : logoContainerClassNames}>
      <StaticImage
        style={isMobile ? mobileLogoStyle : logoStyle}
        src="../images/rs-brand-emblem.png"
        width={256}
        alt="Rick Segrest"
      />

      <div
        style={isMobile ? mobileButtonPanelStyle : buttonPanelStyle}
        className={isMobile ? mobileButtonContainerClassNames : buttonContainerClassNames}>
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
    </div >
  );
}

export default Header
