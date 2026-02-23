// --- SKEUOMORPHIC COMPONENTS ---

// Layered CSS gradients to create a rich, polished walnut wood veneer effect
export const woodVeneerStyle = {
    margin: '0 auto',
    backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.2) 50%, rgba(255,255,255,0.05) 100%),
      repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px),
      linear-gradient(75deg, #4b2e1b 0%, #613c24 15%, #3d2212 35%, #59351e 55%, #311c10 80%, #4b2e1b 100%)
    `,
    boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8), 0 20px 50px rgba(0,0,0,0.9)',
};

// Black perforated leather background for the outer container
export const leatherStyle = {
    backgroundColor: '#1a1a1a',
    backgroundImage: `radial-gradient(#111 15%, transparent 16%), radial-gradient(#111 15%, transparent 16%)`,
    backgroundSize: '8px 8px',
    backgroundPosition: '0 0, 4px 4px'
};

