import React from 'react';

const Pillars = () => {
  const pillars = [
    {
      id: '01',
      title: 'Groq Llama-3 Engine',
      desc: 'Sub-second, deterministic code generation designed purely for patching existing architecture without hallucination.'
    },
    {
      id: '02',
      title: 'Autonomous Git Worker',
      desc: '100% in-memory GitHub REST integration. The agent clones, branches, commits, and opens a PR without local disk I/O.'
    },
    {
      id: '03',
      title: 'X Layer Settlement',
      desc: 'Webhook listeners directly mapped to X Layer smart contracts. Funds remain in trustless escrow until the human clicks Merge.'
    }
  ];

  return (
    <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <span className="eyebrow">The Stack</span>
        <h2 className="h2-title" style={{ maxWidth: '800px' }}>
          One unified agent. Three distinct layers of automation.
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginTop: '4rem'
        }}>
          {pillars.map(p => (
            <div key={p.id} style={{ borderLeft: '1px solid var(--border-subtle)', paddingLeft: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--okx-brand)', fontSize: '0.85rem', marginBottom: '1rem', display: 'block' }}>
                {p.id} — ARCHITECTURE
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
                {p.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
