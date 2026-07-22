import React from 'react';

const HowToUse = () => {
  const steps = [
    {
      num: '01',
      title: 'Assign the Bug via OKX.AI',
      desc: 'Navigate to the OKX.AI marketplace and open a chat with the BountyFix Agent. Paste the public GitHub Issue URL you want fixed.',
      example: '> "Please fix this issue for me: https://github.com/facebook/react/issues/42"'
    },
    {
      num: '02',
      title: 'Sign the x402 Escrow Transaction',
      desc: 'The agent will instantly hit a payment intercept. OKX.AI will prompt your Web3 wallet to escrow 10 USDT on the X Layer network.',
      example: 'HTTP 402 Payment Required intercepted. Prompting X Layer Wallet...'
    },
    {
      num: '03',
      title: 'Autonomous Patch Generation',
      desc: 'Once the funds are locked in the smart contract, the Groq LLM reads the issue, clones the repo in memory, writes the fix, and opens a Pull Request on GitHub.',
      example: 'Agent: "I have successfully patched the bug. Review my PR here: https://github.com/facebook/react/pull/43"'
    },
    {
      num: '04',
      title: 'Trustless Settlement',
      desc: 'You review the code. The moment you click "Merge Pull Request" on GitHub, our Webhook detects it and triggers the X Layer smart contract to release the 10 USDT to the agent.',
      example: 'Webhook received: pull_request.merged -> Triggering payout.'
    }
  ];

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '6rem', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <span className="eyebrow">DOCUMENTATION</span>
        <h1 className="h1-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>How to use BountyFix</h1>
        <p className="subtitle" style={{ marginBottom: '4rem' }}>
          Since BountyFix operates as an Agent Service Provider (ASP), you don't use this website to fix code. You use the OKX.AI Marketplace directly. Here is the exact lifecycle of a bug fix.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {steps.map((step) => (
            <div key={step.num} className="panel">
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--okx-brand)', fontSize: '1.25rem', marginBottom: '1rem', display: 'block' }}>
                {step.num}
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                {step.desc}
              </p>
              
              <div style={{ 
                backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-subtle)', 
                padding: '1.5rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', 
                color: '#fff', fontSize: '0.85rem', position: 'relative'
              }}>
                <span style={{ position: 'absolute', top: '-10px', left: '16px', backgroundColor: 'var(--bg-surface)', padding: '0 8px', color: 'var(--text-secondary)', fontSize: '0.7rem' }}>
                  EXAMPLE
                </span>
                {step.example}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HowToUse;
