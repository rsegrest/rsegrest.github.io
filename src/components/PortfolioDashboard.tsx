import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, FileText, ArrowLeft, Terminal, Cpu, Database, Cloud } from 'lucide-react';
import AmberScreen from './AmberScreen';
import AnalogGauge from './AnalogGauge';
import PROJECTS from '../content/projects.tsx';
import SKILLS from '../content/skills.tsx';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import resume from '../content/resume-md.ts'
import { aboutMe } from '../content/about.ts'
import BootSequence from './BootSequence';
import ProjectCard from './ProjectCard';

// import GoldTrim from './GoldTrim';
// import DashButton from './DashButton';
// import { leatherStyle, woodVeneerStyle } from './style';

export const PortfolioDashboard = (props: {
    currentView: string,
    booting: boolean,
    navigateTo: React.Dispatch<React.SetStateAction<string>>,
    setActiveProject: React.Dispatch<React.SetStateAction<any>>,
    setCurrentView: React.Dispatch<React.SetStateAction<string>>,
    activeProject: any,
}) => {
    const { currentView, booting, navigateTo, setActiveProject, setCurrentView, activeProject } = props;

    return (
        <>
            <AmberScreen>
                {currentView === 'home' && (
                    <div className="animate-in fade-in duration-700">
                        {booting ? (
                            <BootSequence />
                        ) : (
                            <div className="space-y-10" style={{ margin: '0 auto' }}>
                                <div className="border-b border-[#ffb000]/30 pb-6">
                                    <h2 className="hello-text max-w-2xl text-4xl font-bold mb-4 tracking-wider">&gt; HELLO.</h2>
                                    <p
                                        style={{ margin: '0 auto' }}
                                        className="leading-relaxed opacity-90 max-w-4xl">
                                        <Markdown remarkPlugins={[remarkGfm]}>{aboutMe}</Markdown>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {currentView === 'project' && activeProject && (
                    <div
                        style={{ margin: '0 auto' }}
                        className="animate-in max-w-2xl fade-in duration-700 space-y-10">
                        <button
                            onClick={() => setCurrentView('home')}
                            className="flex items-center gap-2 text-[#ffb000]/70 hover:text-[#ffb000] transition-colors mb-4 uppercase text-sm tracking-widest"
                        >
                            <ArrowLeft size={16} /> [RETURN]
                        </button>


                        <div
                            style={{ margin: '0 auto' }}
                            className="border-b border-[#ffb000]/30 pb-6">
                            <h2 className="text-3xl font-bold mb-2">{activeProject.title}</h2>
                            <p className="leading-relaxed opacity-90 max-w-4xl">
                                <span>ID: {activeProject.id.toUpperCase()}</span>
                            </p>
                            <p className="leading-relaxed opacity-90 max-w-4xl">
                                <span>DATE: {activeProject.date}</span>
                            </p>
                            <p className="leading-relaxed opacity-90 max-w-4xl">
                                <a href={activeProject.github} className="flex items-center gap-2 border border-[#ffb000] px-4 py-2 hover:bg-[#ffb000] hover:text-black transition-colors font-bold">
                                    <Github size={18} /> SRC_CODE
                                </a>
                            </p>
                        </div>

                        <div className="space-y-6 opacity-90 leading-relaxed text-sm md:text-base whitespace-pre-line">
                            {activeProject.longDesc.split('\n').map((line: string, idx: number) => {
                                if (line.trim().startsWith('##')) return <h3 key={idx} className="text-xl font-bold mt-6 text-[#ffb000]">{line.replace('##', '').trim()}</h3>;
                                if (line.trim().startsWith('**')) return <h4 key={idx} className="ml-4">{line.replace('**', '').trim()}</h4>;
                                if (line.trim().startsWith('*')) return <p key={idx} className="ml-4">- {line.replace('*', '').trim()}</p>;
                                return <p key={idx}>{line}</p>;
                            })}
                        </div>
                    </div>
                )}
                {currentView === 'projects' ? (
                    <div
                        style={{ margin: '0 auto' }}
                        className="animate-in fade-in duration-700 space-y-10 max-w-2xl">
                        <h3 className="text-xl font-bold mb-6 tracking-widest flex items-center gap-2">
                            <span className="w-2 h-4 bg-[#ffb000] inline-block"></span> PROJECT_LOGS
                        </h3>
                        <div className="grid gap-6">
                            {PROJECTS.map(project => (
                                <ProjectCard project={project} setActiveProject={setActiveProject} setCurrentView={setCurrentView} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div
                        style={{ margin: '0 auto' }}
                        className="animate-in fade-in duration-700 space-y-10 max-w-2xl"
                    >
                        NOT PROJECTS
                    </div>
                )}
                {currentView === 'resume' && (
                    <div
                        style={{ margin: '0 auto' }}
                        className="animate-in fade-in duration-700 space-y-10 max-w-2xl"
                    >
                        <Markdown remarkPlugins={[remarkGfm]}>{resume}</Markdown>
                    </div>
                )}
            </AmberScreen>

            <div
                className="flex flex-col xl:flex-row justify-between items-end gap-10 mt-4"
            >
                {/* Comms Panel (Footer) */}
                <div
                    id="comms"
                    style={{ margin: '0 auto' }}
                    className="max-w-4xl xl:w-1/3 p-6 rounded-2xl bg-[#111] border-2 border-[#c5a059] shadow-[0_10px_20px_rgba(0,0,0,0.6),inset_0_0_15px_rgba(0,0,0,1)] relative">
                    <div className="absolute -top-3 left-6 px-2 bg-[#111] text-[#c5a059] text-[10px] font-bold tracking-widest uppercase">
                        Comms Array
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse" />
                        <span className="text-[#c5a059] font-mono text-xs">OPEN_FOR_OPPORTUNITIES</span>
                    </div>

                    <div className="flex gap-4">
                        <a href="mailto:rsegrest77+ghp@gmail.com" className="w-12 h-12 bg-gradient-to-b from-[#333] to-[#111] rounded border border-black flex items-center justify-center text-[#c5a059] hover:text-white hover:bg-[#444] shadow-[0_4px_6px_rgba(0,0,0,0.8)] active:translate-y-1 active:shadow-none transition-all">
                            <Mail size={20} />
                        </a>
                        <a href="https://github.com/rsegrest" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gradient-to-b from-[#333] to-[#111] rounded border border-black flex items-center justify-center text-[#c5a059] hover:text-white hover:bg-[#444] shadow-[0_4px_6px_rgba(0,0,0,0.8)] active:translate-y-1 active:shadow-none transition-all">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/ricksegrest/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gradient-to-b from-[#333] to-[#111] rounded border border-black flex items-center justify-center text-[#c5a059] hover:text-white hover:bg-[#444] shadow-[0_4px_6px_rgba(0,0,0,0.8)] active:translate-y-1 active:shadow-none transition-all">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
}
export default PortfolioDashboard;