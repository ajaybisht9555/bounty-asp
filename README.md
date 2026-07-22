# BountyFix 🛠️
> **Built for the OKX.AI Genesis Hackathon 2026**

BountyFix is an autonomous Agent Service Provider (ASP) designed to resolve GitHub issues with zero human trust required. By integrating with the OKX.AI Marketplace and the X Layer network, BountyFix turns open-source maintenance into a seamless, deterministic process.

---

## 💡 The Problem
Open-source maintainers are burned out. While developer bounties attempt to solve this, they require massive friction:
- **Heavy Trust Assumptions:** You must trust the developer to fix the code, and the developer must trust you to pay them.
- **Manual Overhead:** Processing invoices and handling back-and-forth communication takes weeks for simple hotfixes.
- **No Guarantees:** No guarantee of code quality before payment is released.

## 🚀 The Solution
BountyFix eliminates the human middleman. We combine ultra-fast LLMs with on-chain escrows to create an agent that patches code autonomously.
1. **Zero Trust:** Funds are locked in an X Layer smart contract, not held by humans.
2. **Instant Resolution:** Groq LLMs generate pull requests in seconds, not weeks.
3. **Deterministic Payouts:** Webhooks release funds only when you click "Merge".

---

## 🏗 Architecture & Tech Stack
BountyFix operates as a standard OKX.AI Agent Service Provider utilizing the Model Context Protocol (MCP).

* **Backend Agent (Node.js/Express):** Handles the OKX.AI `initialize` and `tools/call` endpoints.
* **LLM Engine (Groq Llama-3):** Analyzes the repository and writes the patch with near-instant inference speeds.
* **Settlement Layer (X Layer):** Triggers HTTP 402 Payment Required intercepts to lock USDT in escrow before the agent executes.
* **Marketing Frontend (React + Vite):** A premium, glassmorphism-inspired pitch deck deployed on Vercel.

---

## ⚙️ Repository Structure
This is a monorepo containing both the Agent Backend (ASP) and the Marketing Frontend.

```text
bountyfix-asp/
├── server.js          # Main Express server and OKX.AI webhook handler
├── src/               
│   └── routes/mcp.js  # OKX.AI MCP protocol implementation (initialize, tools/call)
├── .env.example       # Environment variable template
└── frontend/          # React marketing landing page
    ├── index.html
    └── src/
```

---

## 💻 How to Run Locally

### 1. The Agent Backend
The backend requires environment variables to access GitHub and Groq.
```bash
# Clone the repository
git clone https://github.com/yourusername/bountyfix.git
cd bountyfix-asp

# Install dependencies
npm install

# Setup your environment variables
cp .env.example .env
# Edit .env and add your GROQ_API_KEY and GITHUB_TOKEN

# Start the server (runs on port 3000)
npm start
```

### 2. The Marketing Frontend
The frontend is a static React application built with Vite.
```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the Vite development server (runs on port 5173)
npm run dev
```

---

## 🌐 Deployment
* **Backend:** Deploy the root directory to Render/Heroku and register the resulting URL on the OKX.AI Marketplace.
* **Frontend:** Deploy the `frontend/` directory to Vercel for a fast, static marketing site.
