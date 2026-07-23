'use client';

import Link from 'next/link';
import styles from './managed.module.css';

export default function ManagedPage() {
  return (
    <div className={styles.container}>
      {/* Back Navigation */}
      <nav className={styles.backNav}>
        <Link href="/">← Back to Home</Link>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <h1>Managed Trading Service</h1>
        <p>Let our expert traders manage your portfolio while you sit back and watch it grow</p>
      </section>

      {/* What is Managed Trading */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>What is Managed Trading?</h2>
          <div className={styles.mainCard}>
            <p>
              Managed trading takes the guesswork out of investing. You provide capital, and our team of expert traders
              actively manages your portfolio 24/5, executing strategic trades to capitalize on market opportunities.
            </p>
            <p style={{ marginTop: '20px' }}>
              Perfect for investors who want professional-grade returns without the time commitment or market stress.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Why Choose Our Managed Trading?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.icon}>👨‍💼</div>
              <h3>Expert Traders</h3>
              <p>20+ years combined experience in active market trading and portfolio optimization.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.icon}>⚡</div>
              <h3>Active Management</h3>
              <p>Real-time monitoring and strategic trades executed based on live market data and algorithms.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.icon}>🎯</div>
              <h3>Consistent Returns</h3>
              <p>Average annual returns of 15-25% with lower volatility than market benchmarks.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.icon}>🛡️</div>
              <h3>Risk Mitigation</h3>
              <p>Stop-loss strategies and hedging techniques protect your capital in down markets.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.icon}>📱</div>
              <h3>Transparency</h3>
              <p>Real-time dashboard shows every trade, position, and performance metric.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.icon}>🤝</div>
              <h3>Dedicated Support</h3>
              <p>Your own account manager available for questions and strategy discussions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Our Trading Strategy</h2>
          <div className={styles.strategyContent}>
            <div className={styles.strategyBox}>
              <h3>Multi-Asset Approach</h3>
              <p>We trade across stocks, ETFs, and select cryptocurrencies to diversify risk and capture opportunities.</p>
            </div>
            <div className={styles.strategyBox}>
              <h3>Data-Driven Decisions</h3>
              <p>AI-powered analysis of market trends, sentiment, and technical indicators guide every decision.</p>
            </div>
            <div className={styles.strategyBox}>
              <h3>Risk Management First</h3>
              <p>Position sizing and stop-losses ensure no single trade puts your capital at risk.</p>
            </div>
            <div className={styles.strategyBox}>
              <h3>Continuous Optimization</h3>
              <p>Weekly strategy reviews and monthly adjustments keep portfolios performing at peak efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Our Track Record</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>18.7%</div>
              <p>Average Annual Return (5-year)</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>89%</div>
              <p>Winning Months (out of 60)</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>$2.3B+</div>
              <p>Assets Under Management</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>500+</div>
              <p>Active Client Accounts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Managed Trading Tiers</h2>
          <div className={styles.tiersGrid}>
            <div className={styles.tierCard}>
              <h3>Growth Managed</h3>
              <p className={styles.tierPrice}>$25,000 minimum</p>
              <ul>
                <li>✓ Active daily trading</li>
                <li>✓ Weekly performance reports</li>
                <li>✓ Quarterly strategy calls</li>
                <li>✓ Email/chat support</li>
              </ul>
              <button className={styles.button}>Get Started</button>
            </div>
            <div className={styles.tierCard + ' ' + styles.featured}>
              <span className={styles.badge}>Most Popular</span>
              <h3>Managed Pro</h3>
              <p className={styles.tierPrice}>$100,000 minimum</p>
              <ul>
                <li>✓ Aggressive daily trading</li>
                <li>✓ Daily performance summaries</li>
                <li>✓ Bi-weekly strategy calls</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ Premium support</li>
              </ul>
              <button className={styles.buttonPrimary}>Choose This Plan</button>
            </div>
            <div className={styles.tierCard}>
              <h3>Managed Elite</h3>
              <p className={styles.tierPrice}>$500,000+ minimum</p>
              <ul>
                <li>✓ Custom aggressive strategy</li>
                <li>✓ Real-time live updates</li>
                <li>✓ Weekly in-person meetings</li>
                <li>✓ Personal trading team</li>
                <li>✓ 24/5 priority support</li>
              </ul>
              <button className={styles.button}>Contact for Details</button>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Disclosure */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Important: Risk Disclosure</h2>
          <div className={styles.riskBox}>
            <p>
              <strong>Past performance does not guarantee future results.</strong> Managed trading involves risk of loss. 
              Markets can be unpredictable, and even with expert management, losses can occur. Never invest more than 
              you can afford to lose. Past results shown in this site are for illustration purposes and are not necessarily 
              indicative of future performance.
            </p>
            <p style={{ marginTop: '15px' }}>
              Please review our full terms and risk disclosure before opening an account.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready to Let Experts Manage Your Wealth?</h2>
        <p>Start with our Managed Trading service today</p>
        <button className={styles.buttonLarge}>Open Managed Account</button>
      </section>
    </div>
  );
}
