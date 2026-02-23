import React from 'react';
// The Amber CRT Screen (for main content)
export const AmberScreen = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div
            className="w-full max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-[#222] to-[#111] p-4 shadow-[0_15px_30px_rgba(0,0,0,0.9),inset_0_2px_2px_rgba(255,255,255,0.1)] border-b-8 border-r-8 border-t-2 border-l-2 border-[#151515]"
        >
            <div className="w-full h-[600px] bg-[#0a0800] rounded-2xl border-4 border-black overflow-hidden relative shadow-[inset_0_0_50px_rgba(0,0,0,1)]">
                {/* Scanlines and screen glare overlays */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50 pointer-events-none opacity-40"></div>
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black opacity-80 z-40 pointer-events-none"></div>
                <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-white/5 rotate-[-45deg] z-40 pointer-events-none"></div>

                {/* Actual Content Area (Scrollable) */}
                <div className="w-full h-full overflow-y-auto p-8 text-[#ffb000] font-mono scrollbar-hide relative z-30">
                    {children}
                </div>
            </div>
        </div>
    )
};
export default AmberScreen;