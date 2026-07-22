import React from 'react';
import { ShieldCheck, Zap, Code2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }} className="animate-float">
        <div style={{ background: 'rgba(224, 255, 0, 0.1)', padding: '16px', borderRadius: '50%' }}>
          <ShieldCheck size={48} color="var(--accent-okx)" />
        </div>
      </div>
      
      <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
        Trustless <span className="gradient-text">Developer Bounties</span>
      </h1>
      
      <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
        BountyFix is an autonomous AI Agent built on the <strong style={{ color: 'var(--text-main)' }}>OKX.AI Marketplace</strong>. 
        Assign GitHub issues, escrow USDT on X Layer, and let the agent fix it automatically.
      </p>

      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Zap size={16} color="var(--accent-purple)" /> Instant Generation (Groq)
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Code2 size={16} color="var(--accent-blue)" /> Auto Pull Requests
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ShieldCheck size={16} color="var(--accent-okx)" /> On-Chain Settlement
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
