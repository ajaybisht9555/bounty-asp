import React from 'react';
import { Search, ShieldAlert, Cpu, GitPullRequest } from 'lucide-react';

const WorkflowVisualizer = ({ activeStep }) => {
  const steps = [
    { id: 0, title: 'Discovery', desc: 'OKX.AI Marketplace detects agent capabilities.', icon: <Search size={20} /> },
    { id: 1, title: 'x402 Payment Gate', desc: 'Agent intercepts request. Demands USDT escrow on X Layer.', icon: <ShieldAlert size={20} /> },
    { id: 2, title: 'AI Execution', desc: 'Groq LLM reads issue and writes the code fix.', icon: <Cpu size={20} /> },
    { id: 3, title: 'Trustless Settlement', desc: 'Webhook listens for PR merge to release escrow.', icon: <GitPullRequest size={20} /> }
  ];

  return (
    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Live Architecture flow</h2>
      
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Connecting Line */}
        <div style={{ position: 'absolute', left: '19px', top: '20px', bottom: '20px', width: '2px', background: 'var(--border-light)', zIndex: 0 }}></div>

        {steps.map((step) => {
          const isActive = activeStep === step.id;
          const isPast = activeStep > step.id;
          
          let color = 'var(--text-muted)';
          let bg = 'rgba(255,255,255,0.05)';
          let borderColor = 'transparent';
          
          if (isActive) {
            color = 'white';
            bg = 'rgba(139, 92, 246, 0.2)'; // purple tint
            borderColor = 'var(--accent-purple)';
          } else if (isPast) {
            color = 'var(--accent-okx)';
            bg = 'rgba(224, 255, 0, 0.1)';
          }

          return (
            <div key={step.id} style={{ display: 'flex', gap: '1rem', position: 'relative', zIndex: 1, opacity: (isActive || isPast) ? 1 : 0.4, transition: 'all 0.3s ease' }}>
              
              <div style={{ 
                minWidth: '40px', height: '40px', borderRadius: '50%', 
                background: bg, border: `1px solid ${borderColor}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: color,
                boxShadow: isActive ? '0 0 15px rgba(139, 92, 246, 0.5)' : 'none'
              }}>
                {step.icon}
              </div>
              
              <div style={{ paddingTop: '8px' }}>
                <h4 style={{ color: isActive ? 'white' : 'var(--text-main)', fontSize: '1rem', fontWeight: 600, marginBottom: '2px' }}>
                  {step.title}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.4 }}>
                  {step.desc}
                </p>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkflowVisualizer;
