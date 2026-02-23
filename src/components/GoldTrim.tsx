import React from 'react';

export const GoldTrim = ({
    children,
    className = ''
}: {
    children: React.ReactNode;
    className?: string
}) => (
    <div className={`p-[4px] rounded-xl bg-gradient-to-br from-[#f3e5ab] via-[#aa7c11] to-[#6a4f0b] shadow-[0_4px_10px_rgba(0,0,0,0.6)] ${className}`}>
        <div className="h-full w-full rounded-lg border border-[#e5d08b]/40">
            {children}
        </div>
    </div>
);
export default GoldTrim;