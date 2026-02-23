/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import * as STYLES from "../styles/style";
import PortfolioDashboard from "./PortfolioDashboard";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [currentView, setCurrentView] = useState('home');
  const [activeProject, setActiveProject] = useState<any>(null);
  const [booting, setBooting] = useState(true);

  // Boot sequence simulation for the CRT screen
  useEffect(() => {
    if (currentView === 'home' && booting) {
      const timer = setTimeout(() => setBooting(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [currentView, booting]);

  const navigateTo = (view: any) => {
    setCurrentView(view);
    console.log('view', view);
    // if (view === 'home') setBooting(true); // Re-trigger boot seq for fun
  };

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      className="layout-outer w-full max-w-6xl rounded-[40px] border-[6px] border-[#111] relative p-0 md:p-8 lg:p-12 flex flex-col gap-10 text-[0.6rem] md:text-base"
      style={STYLES.woodVeneerStyle}>
      {/* <!-- VERSION 1.0.1 --> */}
      <div style={{ display: 'none' }}>v1.0.1</div>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        currentView={currentView}
        setCurrentView={setCurrentView}
        navigateTo={navigateTo}
      />
      <PortfolioDashboard
        currentView={currentView}
        booting={booting}
        navigateTo={navigateTo}
        setActiveProject={setActiveProject}
        setCurrentView={setCurrentView}
        activeProject={activeProject}
      />
      {/* <main>{children}</main> */}
      <footer
        style={{
          color: '#ffb000',
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
          a: {
            color: '#ffb000',
          }
        } as React.CSSProperties}
      >
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
