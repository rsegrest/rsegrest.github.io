import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, FileText, ArrowLeft, Terminal, Cpu, Database, Cloud } from 'lucide-react';

// --- MOCK DATA ---
// Added "proficiency" (0-100) to power the analog dashboard gauges
export const SKILLS = [
    {
        category: 'Languages', proficiency: 90, icon: <Terminal size={18} />, items: ['JavaScript', 'Python', 'C++', 'Java', 'SQL']
    },
    { category: 'Frontend', proficiency: 85, icon: <Cpu size={18} />, items: ['React', 'HTML5', 'CSS3', 'Tailwind', 'Vue'] },
    { category: 'Backend', proficiency: 75, icon: <Database size={18} />, items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
    { category: 'DevOps', proficiency: 65, icon: <Cloud size={18} />, items: ['Git', 'Docker', 'Linux', 'AWS'] },
];
export default SKILLS;