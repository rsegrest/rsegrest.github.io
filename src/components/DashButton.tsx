import React from 'react';
import { isMobile } from 'react-device-detect';
// Chunky 70s tactile button
export const DashButton = ({
    label,
    active,
    onClick
}: {
    label: string,
    active?: boolean,
    onClick: () => void
}) => {
    const buttonStyle = {
        width: '7rem',
        marginLeft: '1rem',
        marginRight: '1rem'
    }
    const mobileButtonStyle = {
        width: '4rem',
        marginTop: '1rem',
    }
    let buttonFaceClassNames = `py-3 w-full rounded bg-gradient-to-b from-[#333] to-[#111] text-xs font-bold text-[#c5a059] uppercase tracking-widest border-b-4 border-black transition-all duration-100 
    ${active
            ? 'translate-y-1 border-b-0 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] text-[#f3e5ab]'
            : 'hover:bg-[#3a3a3a] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]'}`;
    if (!isMobile) {
        buttonFaceClassNames = 'px-2 ' + buttonFaceClassNames;
    }
    const buttonOuterClassNames = `relative group flex flex-col items-center ${isMobile ? '' : 'gap-3'} w-24 outline-none`;
    const buttonFaceStyle = {

    }
    const mobileButtonFaceStyle = {
        fontSize: '0.45rem',
    }
    return (
        <button
            onClick={onClick}
            className={buttonOuterClassNames}
        >
            {/* Pill Light Indicator */}
            <div className={`w-10 h-3 rounded-full border border-black transition-all duration-300 
            ${active
                    ? 'bg-lime-500 shadow-[0_0_12px_3px_rgba(68,239,68,0.8),inset_0_2px_4px_rgba(255,255,255,0.4)]'
                    : 'bg-lime-950 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]'
                }`} />

            {/* Physical Button base */}
            <div
                style={isMobile ? mobileButtonStyle : buttonStyle}
                className="w-full bg-gradient-to-b from-[#444] to-[#222] p-1 rounded-lg shadow-[0_6px_10px_rgba(0,0,0,0.7)]"
            >
                {/* Button face that depresses */}
                <div
                    style={isMobile ? mobileButtonFaceStyle : buttonFaceStyle}
                    className={buttonFaceClassNames}>
                    {/* {isMobile ? null : label} */}
                    {label}
                </div>
            </div>
        </button>
    );
}
export default DashButton;