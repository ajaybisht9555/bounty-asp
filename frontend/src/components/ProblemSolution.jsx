import React from 'react';

const ProblemSolution = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          
          {/* Problem Column */}
          <div style={{ paddingRight: '2rem', borderRight: '1px solid var(--border-subtle)' }}>
            <span className="eyebrow" style={{ color: '#ef4444' }}>THE PROBLEM</span>
            <h2 className="h2-title" style={{ fontSize: '2.5rem' }}>Open-source is fundamentally broken.</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Maintainers are burned out. Codebases are flooded with minor issues and technical debt. 
              Traditional developer bounties attempt to solve this, but they require massive friction:
            </p>
            <ul style={{ color: 'var(--text-secondary)', listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: '#ef4444' }}>×</span> Manual invoice processing and heavy trust assumptions.</li>
              <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: '#ef4444' }}>×</span> Weeks of back-and-forth communication for simple hotfixes.</li>
              <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: '#ef4444' }}>×</span> No guarantee of code quality before payment is released.</li>
            </ul>
          </div>

          {/* Solution Column */}
          <div>
            <span className="eyebrow" style={{ color: 'var(--okx-brand)' }}>THE SOLUTION</span>
            <h2 className="h2-title" style={{ fontSize: '2.5rem' }}>Trustless agentic repair.</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              BountyFix eliminates the human middleman. By combining ultra-fast LLMs with on-chain escrows, we created an Agent Service Provider (ASP) that patches code autonomously.
            </p>
            <ul style={{ color: 'var(--text-secondary)', listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--okx-brand)' }}>✓</span> <strong>Zero Trust:</strong> Funds are locked in an X Layer smart contract, not held by humans.</li>
              <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--okx-brand)' }}>✓</span> <strong>Instant Resolution:</strong> Groq LLMs generate pull requests in seconds, not weeks.</li>
              <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--okx-brand)' }}>✓</span> <strong>Deterministic Payouts:</strong> Webhooks release funds only when you click "Merge".</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
