import React, { useEffect, useState } from 'react';

// Analog Gauge (Veglia Borletti style)
const AnalogGauge = ({
    label,
    percentage,
    icon
}: {
    label: string,
    percentage: number,
    icon: any,
}) => {
    // Calculate rotation (-130deg to +130deg sweep)
    const [rotation, setRotation] = useState(-130);

    useEffect(() => {
        // Animate needle on mount
        const target = -130 + (percentage / 100) * 260;
        setTimeout(() => setRotation(target), 300);
    }, [percentage]);

    return (
        <div className="flex flex-col items-center gap-4">
            {/* Gauge Housing (Gold Bezel + Black Face) */}
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#e5d08b] via-[#aa7c11] to-[#4a3608] p-1.5 shadow-[0_10px_20px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(255,255,255,0.5)]">
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,1)] z-10 pointer-events-none" />
                <div className="w-full h-full rounded-full bg-[#111] border-2 border-black flex items-center justify-center relative overflow-hidden">

                    {/* Gauge Markings (SVG) */}
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-60">
                        <circle cx="50" cy="50" r="42" fill="none" stroke="#fff" strokeWidth="0.5" strokeDasharray="2 4" />
                        <circle cx="50" cy="50" r="35" fill="none" stroke="#c5a059" strokeWidth="1" strokeDasharray="10 15" />
                        {/* Redline zone */}
                        <path d="M 85 50 A 35 35 0 0 0 75 85" fill="none" stroke="#e11d48" strokeWidth="3" />
                    </svg>

                    {/* Icon in center */}
                    <div className="text-[#c5a059] opacity-40 absolute top-1/4">
                        {icon}
                    </div>

                    {/* Value Display */}
                    <div className="absolute bottom-6 font-mono text-[10px] text-[#c5a059] bg-[#000] px-2 py-0.5 rounded border border-[#333] shadow-[inset_0_1px_3px_rgba(0,0,0,1)]">
                        {percentage}%
                    </div>

                    {/* The Needle */}
                    <div
                        className="absolute bottom-1/2 left-1/2 w-[3px] h-14 bg-[#ff3300] origin-bottom -translate-x-1/2 rounded-t-full shadow-[2px_2px_4px_rgba(0,0,0,0.6)] transition-transform duration-1000 cubic-bezier(0.34, 1.56, 0.64, 1)"
                        style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }}
                    >
                        {/* Needle center cap */}
                        <div className="absolute -bottom-2 -left-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-[#ccc] to-[#555] border border-black shadow-md" />
                    </div>

                </div>
            </div>
            {/* Engraved Label */}
            <div className="px-3 py-1 bg-gradient-to-b from-[#d4af37] to-[#8c6710] rounded border border-black shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                <span className="text-[10px] font-bold text-black uppercase tracking-widest">{label}</span>
            </div>
        </div>
    );
};
export default AnalogGauge;