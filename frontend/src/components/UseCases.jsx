import React from 'react';

const UseCases = () => {
  const cases = [
    {
      title: 'Late-Night Hotfixes',
      desc: 'Wake up to a broken production build? Assign the GitHub issue to the OKX.AI marketplace. BountyFix will submit a patch before you finish your coffee.'
    },
    {
      title: 'Scaling Open-Source',
      desc: 'Allow your community to fund specific bug fixes without setting up grants. They escrow the USDT, and the agent fixes it for the community.'
    },
    {
      title: 'Enterprise Tech Debt',
      desc: 'Point the agent at 100 minor linting or dependency upgrade tickets. Fund the escrow in bulk, and watch the PRs roll in autonomously.'
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <span className="eyebrow">USE CASES</span>
        <h2 className="h2-title" style={{ maxWidth: '600px', marginBottom: '4rem' }}>Built for scale. Designed for speed.</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {cases.map((uc, i) => (
            <div key={i} className="panel" style={{ backgroundColor: 'var(--bg-base)' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(196, 255, 0, 0.1)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--okx-brand)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                0{i + 1}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>{uc.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
