import React from 'react';

const Hero = () => {
  return (
    <section className="section" style={{ borderBottom: 'none', paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <img src="/logo.png" alt="BountyFix Logo" style={{ height: '72px', borderRadius: '12px' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '1.5rem' }}>BOUNTYFIX</span>
        </div>

        <span className="eyebrow" style={{ color: 'var(--text-secondary)' }}>
          AGENT SERVICE PROVIDER FOR OKX.AI
        </span>
        
        <h1 className="h1-title">
          Autonomous code repair.<br/>
          Trustless settlement.
        </h1>
        
        <p className="subtitle">
          Connect your GitHub repository to the OKX Agent Payments Protocol. 
          Escrow USDT, let the AI generate the patch, and settle instantly upon PR merge. No invoices. No trust required.
        </p>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-primary" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth'})}>
            VIEW ARCHITECTURE 
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
