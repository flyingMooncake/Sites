import { motion } from 'framer-motion'
import { Shield, Network, Coins, TrendingUp, Lock, Zap, Database, ArrowRight, Github, Twitter, MessageCircle, FileText } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/logo.png" alt="SentinelKarma Logo" className="logo-icon" />
            <span className="logo-text">SentinelKarma</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#tokenomics">Tokenomics</a>
            <a href="#roadmap">Roadmap</a>
            <a href="/whitepaper.md" target="_blank" className="btn-primary">
              Whitepaper <FileText size={16} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            <span>v2.0</span>
            <span className="separator">•</span>
            <span>Live on Solana Devnet</span>
          </div>
          <h1 className="hero-title">
            Decentralized Threat Intelligence
            <br />
            <span className="gradient-text">for Web3 Infrastructure</span>
          </h1>
          <p className="hero-description">
            A peer-to-peer network monitoring system that combines real-time anomaly detection,
            blockchain reputation, and simple HTTP-based log sharing to protect RPC endpoints
            from malicious traffic.
          </p>
          <div className="hero-buttons">
            <a href="#how-it-works" className="btn-large btn-primary">
              Get Started <ArrowRight size={20} />
            </a>
            <a href="https://github.com/flyingMooncake/SentinelKarma" target="_blank" rel="noopener noreferrer" className="btn-large btn-secondary">
              <Github size={20} /> View on GitHub
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">70%</div>
              <div className="stat-label">Reduced Abuse</div>
            </div>
            <div className="stat">
              <div className="stat-value">$0-5</div>
              <div className="stat-label">Cost per Month</div>
            </div>
            <div className="stat">
              <div className="stat-value">&lt;400ms</div>
              <div className="stat-label">Detection Time</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Key Features */}
      <section id="features" className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Why SentinelKarma?</h2>
            <p className="section-subtitle">
              The first decentralized threat intelligence network built for Web3 RPC infrastructure
            </p>
          </motion.div>

          <div className="features-grid">
            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="feature-icon">
                <Zap />
              </div>
              <h3>Real-time Detection</h3>
              <p>
                Statistical anomaly detection using z-scores and percentile analysis.
                Detect malicious patterns in &lt;400ms with 250ms aggregation windows.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="feature-icon">
                <Network />
              </div>
              <h3>Simple P2P Sharing</h3>
              <p>
                Direct HTTP-based log sharing between peers. No complex IPFS setup—
                just FastAPI servers with signed requests and blockchain verification.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="feature-icon">
                <Lock />
              </div>
              <h3>Blockchain Verified</h3>
              <p>
                Every threat report stored as an NFT with SHA256 hash on Solana.
                Download logs from peers and verify integrity against blockchain.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="feature-icon">
                <Coins />
              </div>
              <h3>Economic Incentives</h3>
              <p>
                Earn Karma Points by validating threat reports. Convert to SEKA tokens
                at 100 KP = 1 SEKA. 1,000 SEKA distributed every 2 hours.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="feature-icon">
                <Shield />
              </div>
              <h3>Privacy Protected</h3>
              <p>
                IP addresses salted and hashed before logging. No PII exposure,
                data minimization, and automatic retention policies.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="feature-icon">
                <Database />
              </div>
              <h3>Affordable Storage</h3>
              <p>
                $0-5/month per peer vs $25-50 for IPFS. Local storage with automatic
                cleanup. 1GB limit, 10MB max per log file.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section section-dark">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Three-layer architecture for decentralized threat intelligence
            </p>
          </motion.div>

          <div className="architecture-flow">
            <motion.div
              className="flow-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flow-number">1</div>
              <div className="flow-content">
                <h3>Telemetry Collection</h3>
                <p>
                  Monitor RPC endpoints in real-time. Capture request metadata
                  (IP hash, method, latency, errors) as JSONL events.
                </p>
                <ul>
                  <li>Rolling 250ms windows</li>
                  <li>P95 latency calculation</li>
                  <li>Error rate computation</li>
                  <li>Z-score anomaly detection</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="flow-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flow-number">2</div>
              <div className="flow-content">
                <h3>P2P Log Sharing</h3>
                <p>
                  Store malicious logs locally and serve via FastAPI HTTP server.
                  Peers download with signed requests.
                </p>
                <ul>
                  <li>30-second rotation for threats</li>
                  <li>Ed25519 signature authentication</li>
                  <li>SHA256 hash verification</li>
                  <li>Auto-mint NFTs with log URL</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="flow-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flow-number">3</div>
              <div className="flow-content">
                <h3>Blockchain Reputation</h3>
                <p>
                  Community validates reports through likes. Earn karma,
                  convert to SEKA tokens, get rewarded.
                </p>
                <ul>
                  <li>Non-transferable Karma Points</li>
                  <li>Fungible SEKA token</li>
                  <li>2-hour reward cycles</li>
                  <li>1,000 SEKA per cycle pool</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Dual-Token Economics</h2>
            <p className="section-subtitle">
              Sustainable incentive mechanism for quality threat intelligence
            </p>
          </motion.div>

          <div className="tokenomics-grid">
            <motion.div
              className="token-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="token-header">
                <TrendingUp size={32} />
                <h3>Karma Points (KP)</h3>
              </div>
              <div className="token-description">
                <p><strong>Non-transferable reputation metric</strong></p>
                <ul>
                  <li>Earned through community validation</li>
                  <li>1 like = 1 karma point</li>
                  <li>Accumulated per 2-hour cycle</li>
                  <li>Reset after distribution</li>
                  <li>Stored on-chain in PeerState</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="token-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="token-header">
                <Coins size={32} />
                <h3>SEKA Token</h3>
              </div>
              <div className="token-description">
                <p><strong>Fungible SPL token with utility</strong></p>
                <ul>
                  <li>Conversion: 100 KP = 1 SEKA</li>
                  <li>Network membership: 1,000 SEKA</li>
                  <li>Cycle pool: 1,000 SEKA/2hrs</li>
                  <li>Max per peer: 100 SEKA/cycle</li>
                  <li>Dynamic supply via karma conversion</li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="formula-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4>Reward Distribution Formula</h4>
            <div className="formula">
              peer_reward = min((peer_karma / total_karma) × 1000 SEKA, 100 SEKA)
            </div>
            <p>Proportional distribution with 10% cap prevents single-peer dominance</p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section section-dark">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Real-World Applications</h2>
          </motion.div>

          <div className="use-cases-grid">
            <motion.div
              className="use-case-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>RPC Provider Protection</h3>
              <p>
                Deploy SentinelKarma to monitor public endpoints. Detect abuse patterns,
                receive real-time alerts, and implement rate limiting based on validated
                threat intelligence. <strong>70% reduction in abusive traffic.</strong>
              </p>
            </motion.div>

            <motion.div
              className="use-case-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3>Collaborative Threat Intelligence</h3>
              <p>
                Multiple RPC providers share security data through P2P log sharing.
                Community validates reports, high-karma threats automatically trusted.
                <strong>Faster detection, reduced costs, collective defense.</strong>
              </p>
            </motion.div>

            <motion.div
              className="use-case-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3>Security Research</h3>
              <p>
                Deploy monitoring agents across regions to collect real-world attack data.
                Analyze patterns, share findings via NFT reports, and contribute to
                Web3 security knowledge base.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Roadmap</h2>
          </motion.div>

          <div className="roadmap">
            <motion.div
              className="roadmap-item completed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="roadmap-quarter">Q1 2025</div>
              <div className="roadmap-content">
                <h3>MVP Launch ✅</h3>
                <ul>
                  <li>Core telemetry pipeline</li>
                  <li>MQTT messaging layer</li>
                  <li>Smart contracts deployed</li>
                  <li>NFT-based reporting</li>
                  <li>P2P HTTP log sharing</li>
                  <li>Auto-mint daemon</li>
                  <li>Web dashboard</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="roadmap-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="roadmap-quarter">Q2 2025</div>
              <div className="roadmap-content">
                <h3>Production Hardening</h3>
                <ul>
                  <li>TLS-encrypted MQTT</li>
                  <li>HTTPS log server with SSL</li>
                  <li>ML-based anomaly detection</li>
                  <li>Multi-region deployment</li>
                  <li>Security audit</li>
                  <li>CDN integration</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="roadmap-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="roadmap-quarter">Q3 2025</div>
              <div className="roadmap-content">
                <h3>Ecosystem Growth</h3>
                <ul>
                  <li>Public testnet launch</li>
                  <li>Developer SDK</li>
                  <li>Mobile monitoring app</li>
                  <li>RPC provider partnerships</li>
                  <li>Community onboarding</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="roadmap-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="roadmap-quarter">Q4 2025</div>
              <div className="roadmap-content">
                <h3>Decentralization</h3>
                <ul>
                  <li>Multisig governance</li>
                  <li>Permissionless joining</li>
                  <li>Cross-chain bridge</li>
                  <li>Mainnet launch</li>
                  <li>DAO formation</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Secure Web3?</h2>
          <p>Join the decentralized threat intelligence network today</p>
          <div className="cta-buttons">
            <a href="/whitepaper.md" target="_blank" className="btn-large btn-primary">
              Read Whitepaper
            </a>
            <a href="https://github.com/flyingMooncake/SentinelKarma" target="_blank" rel="noopener noreferrer" className="btn-large btn-secondary">
              <Github size={20} /> View on GitHub
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/logo.png" alt="SentinelKarma Logo" style={{width: '64px', height: '64px'}} />
                <span>SentinelKarma</span>
              </div>
              <p>Decentralized threat intelligence for Web3 infrastructure</p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#tokenomics">Tokenomics</a>
                <a href="#roadmap">Roadmap</a>
              </div>

              <div className="footer-column">
                <h4>Resources</h4>
                <a href="/whitepaper.md" target="_blank">Whitepaper</a>
                <a href="https://docs.sentinelkarma.io">Documentation</a>
                <a href="https://github.com/flyingMooncake/SentinelKarma" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://arena.colosseum.org/projects/explore/sentinel-karma?previous=L3Byb2plY3RzL2V4cGxvcmU_c2VlZD0zMmQ2OWIxZWQ4ZDhlOWQxJmNvdW50cnk9Um9tYW5pYQ" target="_blank" rel="noopener noreferrer">Colosseum Arena</a>
              </div>

              <div className="footer-column">
                <h4>Community</h4>
                <a href="https://discord.gg/sentinelkarma">
                  <MessageCircle size={16} /> Discord
                </a>
                <a href="https://x.com/SentinelKarma" target="_blank" rel="noopener noreferrer">
                  <Twitter size={16} /> X (Twitter)
                </a>
                <a href="mailto:team@sentinelkarma.io">Contact</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 SentinelKarma Contributors. MIT License.</p>
            <p>Program ID: Da3fi9D86CM262Xbu8nCwiJRNc6wEgSoKH1cw3p1MA8V</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
