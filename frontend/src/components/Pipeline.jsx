import React from 'react';

const Pipeline = ({ activeStep }) => {
  const steps = [
    { id: 0, label: '01', title: 'Discovery', desc: 'OKX.AI detects capabilities via /initialize' },
    { id: 1, label: '02', title: 'Intercept', desc: 'Agent demands x402 payment payload' },
    { id: 2, label: '03', title: 'Execution', desc: 'LLM generates patch & pushes PR' },
    { id: 3, label: '04', title: 'Settlement', desc: 'GitHub webhook triggers X Layer payout' }
  ];

  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">The Protocol Lifecycle</span>
        <h2 className="h2-title">Complete execution from end to end.</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: 'var(--border-subtle)', border: '1px solid var(--border-subtle)', marginTop: '4rem' }}>
          {steps.map(step => {
            const isActive = activeStep === step.id;
            const isComplete = activeStep > step.id;
            
            return (
              <div key={step.id} style={{ 
                backgroundColor: 'var(--bg-surface)', 
                padding: '2rem',
                borderTop: isActive ? '2px solid var(--okx-brand)' : '2px solid transparent',
                transition: 'all 0.3s ease'
              }}>
                <span style={{ 
                  fontFamily: 'var(--font-mono)', 
                  color: (isActive || isComplete) ? 'var(--okx-brand)' : 'var(--text-secondary)', 
                  display: 'block', 
                  marginBottom: '1rem' 
                }}>
                  {step.label}
                </span>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: (isActive || isComplete) ? '#fff' : 'var(--text-secondary)' }}>
                  {step.title}
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pipeline;
