// Replace with your actual X Layer Testnet Wallet Address to receive funds
const YOUR_WALLET_ADDRESS = process.env.WALLET_ADDRESS || "0x0000000000000000000000000000000000000000";

const x402Auth = (req, res, next) => {
  const { method } = req.body;

  // 1. Bypass payment for discovery methods (OKX Network requires these to be free)
  if (method === 'initialize' || method === 'tools/list') {
    return next();
  }

  // 2. Protect the actual execution route (tools/call)
  if (method === 'tools/call') {
    const paymentHeader = req.headers['authorization'] || req.headers['x-payment'];

    if (!paymentHeader) {
      // Construct the exact payment request payload OKX expects
      const paymentPayload = {
        accepts: [
          {
            scheme: "exact",
            network: "eip155:196", // X Layer Testnet ID
            asset: "0x74b7f16337b8972027f6196a17a631ac6de26d22", // USDT token contract on X Layer
            amount: "1000000", // Decimal adjusted amount (e.g., 1 USDT)
            payTo: YOUR_WALLET_ADDRESS
          }
        ]
      };

      // Base64 encode the payload
      const encodedPayload = Buffer.from(JSON.stringify(paymentPayload)).toString('base64');

      // Intercept and return HTTP 402 with the header
      res.setHeader('payment-required', encodedPayload);
      return res.status(402).json({ error: "Payment Required on X Layer" });
    }

    // If payment header exists, proceed to execute the tool
    return next();
  }

  // Fallback for unknown methods
  return next();
};

module.exports = x402Auth;
