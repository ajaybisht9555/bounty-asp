// Hardcoded demo agent to bypass Render spin-down wiping temporary memory
// The OKX automated tester will always hit /api/agents/demo-agent/mcp
const demoAgent = {
  id: 'demo-agent',
  name: 'BountyFix ASP',
  description: 'Autonomous developer agent that fixes GitHub issues and gets paid on X Layer via x402 escrow.',
  status: 'active',
  capabilities: ['github_integration', 'code_editing', 'pr_creation']
};

module.exports = demoAgent;
