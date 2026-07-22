import React from 'react';
import Navbar from '../components/Navbar';
import Mermaid from '../components/Mermaid';

export default function Architecture() {
  const architectureChart = `
sequenceDiagram
    autonumber
    
    actor Customer as Open Source Maintainer
    participant OKX as OKX.AI Marketplace
    participant XLayer as X Layer Smart Contract
    participant Render as BountyFix ASP (Your Backend)
    participant Groq as Groq LLM (Llama-3.3)
    participant GitHub as GitHub API

    Note over Customer, GitHub: Phase 1: The x402 Payment Intercept
    
    Customer->>OKX: Hires BountyFix to fix Issue #1
    OKX->>Render: POST /api/agents/demo-agent/mcp (Method: tools/call)
    Render-->>OKX: HTTP 402 Payment Required (Base64 Payload: 1 USDT)
    OKX->>XLayer: Locks 1 USDT in Escrow Smart Contract
    
    Note over Customer, GitHub: Phase 2: Autonomous Execution
    
    OKX->>Render: POST /api/agents/demo-agent/mcp (Includes Payment Receipt)
    Render->>GitHub: Fetch Issue #1 Description
    GitHub-->>Render: Issue Data
    Render->>GitHub: Fetch current server.js file
    GitHub-->>Render: File Content
    
    Render->>Groq: Prompt: "Fix this file based on this issue"
    Groq-->>Render: Patched Code returned in milliseconds
    
    Note over Customer, GitHub: Phase 3: Delivery & Settlement
    
    Render->>GitHub: Create new branch (bountyfix/issue-1)
    Render->>GitHub: Commit the patched code
    Render->>GitHub: Open Pull Request
    Render-->>OKX: 200 OK (Execution Successful, PR URL)
    OKX-->>Customer: Notifies Customer that PR is ready
    
    Customer->>GitHub: Reviews and Merges the Pull Request
    GitHub->>XLayer: Merge Webhook triggers Settlement
    XLayer->>XLayer: 1 USDT released to 0xA0cc...24D6
  `;

  return (
    <div className="app-container">
      <Navbar />
      <div className="section" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
              Architecture Flow
            </h1>
            <p className="hero-subtitle" style={{ margin: '0 auto' }}>
              A technical deep-dive into how BountyFix achieves Zero-Trust Autonomous Engineering via the X Layer.
            </p>
          </div>

          <div className="panel" style={{ backgroundColor: 'var(--bg-surface)' }}>
            <h3 style={{ color: 'var(--primary-glow)', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
              The OKX.AI Lifecycle
            </h3>
            
            <Mermaid chart={architectureChart} />

            <div style={{ marginTop: '3rem', display: 'grid', gap: '2rem' }}>
              <div>
                <h4 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.25rem' }}>Phase 1: The x402 Payment Intercept</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  When a customer requests a bug fix through the OKX.AI marketplace, the BountyFix Agent Service Provider (ASP) intercepts the request. Before any expensive LLM inference occurs, the ASP returns an HTTP 402 Payment Required response with an encrypted Base64 payload, forcing the OKX.AI platform to lock 1 USDT in an X Layer smart contract escrow.
                </p>
              </div>

              <div>
                <h4 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.25rem' }}>Phase 2: Autonomous Execution</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Once the payment receipt is validated, BountyFix authenticates with the target GitHub repository. It downloads the issue description and the target file contents, and streams them directly into the ultra-fast Groq Llama-3.3 LLM for deterministic code generation.
                </p>
              </div>

              <div>
                <h4 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.25rem' }}>Phase 3: Delivery & Settlement</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  The agent creates a new branch, pushes the patched code, and opens a Pull Request on behalf of the customer. The ASP returns a 200 OK to the OKX.AI network. Once the maintainer manually merges the Pull Request, a webhook triggers the smart contract to release the 1 USDT directly into the BountyFix treasury wallet!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
