import React from 'react';
import AnalogGauge from "./AnalogGauge";
import SKILLS from "../content/skills";

// BOTTOM ROW: Analog Gauges for Skills & Comm Panel
export const SystemCapabilities = () => {
    return (
        <div
            // style={{ border: '1px solid #ffb000' }}
            className="flex flex-col xl:flex-row justify-between items-end gap-10 mt-4"
        >

            {/* Dashboard Gauges */}
            < div
                style={{
                    // border: '1px solid #00ff00',
                    margin: '0 auto',
                    width: '85%',
                }
                }
                className="w-full xl:w-2/3 p-6 rounded-2xl bg-black/40 shadow-[inset_0_4px_10px_rgba(0,0,0,0.8)] border-t border-white/10"
            >
                <h3 className="text-center text-[#c5a059] text-xs font-bold tracking-[0.3em] uppercase mb-6 opacity-80">System Capabilities</h3>
                <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                    {SKILLS.map((skill, idx) => (
                        <AnalogGauge key={idx} label={skill.category} percentage={skill.proficiency} icon={skill.icon} />
                    ))}
                </div>
            </div >
        </div >
    );
}
export default SystemCapabilities;