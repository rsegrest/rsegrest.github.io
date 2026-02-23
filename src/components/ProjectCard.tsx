import React from 'react';
export const ProjectCard = ({
    project,
    setActiveProject,
    setCurrentView
}: {
    project: any,
    setActiveProject: any,
    setCurrentView: any
}) => {
    return (<div
        style={{
            borderRadius: '0.6rem',
        }}
        key={project.id}
        onClick={() => { setActiveProject(project); setCurrentView('project'); }}
        className="group p-4 border border-[#ffb000]/30 hover:bg-[#ffb000]/10 cursor-pointer transition-colors"
    >
        <div className="flex justify-between items-start mb-2">
            <h4 className="text-lg font-bold group-hover:underline decoration-2 underline-offset-4">{project.title}</h4>
            <span className="text-xs opacity-70">[{project.date}]</span>
        </div>
        <p className="text-sm opacity-80 mb-4">{project.shortDesc}</p>
        <div>
            <p
                style={{
                    marginTop: '0.6rem',
                    marginBottom: '0.2rem',
                }}
                className="text-sm opacity-80 mb-4">Tech Stack:</p>
        </div>
        <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech: string, i: number) => (
                <span key={i} className="text-xs border border-[#ffb000]/50 px-2 py-1 bg-black">
                    {tech}
                </span>
            ))}
        </div>
        {
            project.aiModels && (
                <>
                    <div>
                        <p style={{
                            marginTop: '0.6rem',
                            marginBottom: '0.2rem',
                        }} className="text-sm opacity-80 mb-4">AI Models:</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {project.aiModels?.map((model: string, i: number) => (
                            <span key={i} className="text-xs border border-[#ffb000]/50 px-2 py-1 bg-black">
                                {model}
                            </span>
                        ))}
                    </div>
                </>
            )
        }
    </div>)
}
export default ProjectCard;