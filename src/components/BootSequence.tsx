import React from 'react';

export const BootSequence = () => {
    return (
        <div className="space-y-2">
            <p>SYS_INIT v1.0.4...</p>
            <p className="animate-pulse">LOADING MODULES [||||||||||] 100%</p>
            <p>ESTABLISHING CONNECTION...</p>
            <p>ACCESS GRANTED. WELCOME.</p>
        </div>
    )
}

export default BootSequence;