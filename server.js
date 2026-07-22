const express = require('express');
const cors = require('cors');
require('dotenv').config();

const mcpRoutes = require('./src/routes/mcp');
const webhookRoutes = require('./src/routes/webhooks');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check route for Render (if they hit /health)
app.get('/health', (req, res) => {
  res.send('BountyFix is alive and wealthy!');
});

// Register MCP Routes
app.use('/api/agents', mcpRoutes);

// Register Webhook Routes
app.use('/api/webhooks', webhookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 BountyFix ASP running on port ${PORT}`);
});