const express = require('express');
const crypto = require('crypto');
const { ethers } = require('ethers');
const router = express.Router();

// Middleware to verify GitHub webhook signatures
const verifyGitHubSignature = (req, res, next) => {
  const signature = req.headers['x-hub-signature-256'];
  if (!signature) return res.status(401).send('No signature provided');

  const payload = JSON.stringify(req.body);
  const secret = process.env.GITHUB_WEBHOOK_SECRET || 'hackathon-secret';
  
  const expectedSignature = `sha256=${crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex')}`;

  if (crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
    return next();
  }
  
  return res.status(401).send('Invalid signature');
};

// Listen for PR merges from GitHub
router.post('/github', verifyGitHubSignature, async (req, res) => {
  const event = req.headers['x-github-event'];
  
  // We only care about Pull Request events
  if (event === 'pull_request') {
    const { action, pull_request } = req.body;

    // Check if the PR was closed AND merged
    if (action === 'closed' && pull_request.merged === true) {
      console.log(`✅ PR #${pull_request.number} was merged! Triggering X Layer payout...`);

      try {
        // --- Smart Contract Escrow Release Logic (Mocked for Hackathon) ---
        // In a production environment, you would call your actual X Layer contract here.
        // const provider = new ethers.JsonRpcProvider(process.env.XLAYER_RPC_URL);
        // const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
        // const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);
        // const tx = await contract.releaseEscrow(pull_request.id);
        // await tx.wait();
        
        console.log(`💸 Escrow funds successfully released to the agent's wallet on X Layer.`);
        return res.status(200).send('Payout successful');
      } catch (error) {
        console.error('Failed to release escrow:', error);
        return res.status(500).send('Failed to process payout');
      }
    }
  }

  // Acknowledge other events
  res.status(200).send('Event ignored');
});

module.exports = router;
