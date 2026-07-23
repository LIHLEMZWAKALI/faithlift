'use client';

import Link from 'next/link';
import styles from './investing.module.css';

export default function InvestingPage() {
  return (
    <div className={styles.container}>
      {/* Back Navigation */}
      <nav className={styles.backNav}>
        <Link href="/">← Back to Home</Link>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <h1>Long-Term Investing</h1>
        <p>Build wealth steadily with data-driven investment strategies</p>
      </section>

      {/* Why Long-Term Investing */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Why Long-Term Investing Works</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Compound Growth</h3>
              <p>Your money works harder over time. Historical data shows that 30-year portfolios rarely lose money.</p>
            </div>
            <div className={styles.card}>
              <h3>Lower Risk</h3>
              <p>Time smooths out market volatility. Short-term dips become long-term gains.</p>
            </div>
            <div className={styles.card}>
              <h3>Tax Efficiency</h3>
              <p>Hold investments longer and pay less in capital gains taxes.</p>
            </div>
            <div className={styles.card}>
              <h3>Peace of Mind</h3>
              <p>No daily market stress. Let your portfolio work passively while you focus on life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Our Investment Philosophy</h2>
          <div className={styles.approachContent}>
            <div className={styles.approachText}>
              <h3>Diversified, Data-Driven Portfolios</h3>
              <p>We build custom portfolios based on:</p>
              <ul>
                <li><strong>Your Risk Tolerance:</strong> Conservative, Moderate, or Aggressive</li>
                <li><strong>Your Timeline:</strong> 5, 10, 20+ year horizons</li>
                <li><strong>Your Goals:</strong> Retirement, education, wealth building</li>
                <li><strong>Market Analysis:</strong> Real-time data and algorithmic rebalancing</li>
              </ul>
              <p style={{ marginTop: '20px' }}>Our average client sees <strong>12-18% annual returns</strong> over 5-year periods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Choose Your Investment Tier</h2>
          <div className={styles.plansGrid}>
            <div className={styles.planCard}>
              <h3>Starter</h3>
              <p className={styles.planPrice}>$5,000 minimum</p>
              <ul>
                <li>✓ Diversified portfolio</li>
                <li>✓ Quarterly rebalancing</li>
                <li>✓ Quarterly performance reports</li>
                <li>✓ Email support</li>
              </ul>
              <button className={styles.button}>Get Started</button>
            </div>
            <div className={styles.planCard + ' ' + styles.featured}>
              <span className={styles.badge}>Most Popular</span>
              <h3>Growth</h3>
              <p className={styles.planPrice}>$25,000 minimum</p>
              <ul>
                <li>✓ Custom portfolio strategy</li>
                <li>✓ Monthly rebalancing</li>
                <li>✓ Monthly reports & insights</li>
                <li>✓ Quarterly strategy reviews</li>
                <li>✓ Priority support</li>
              </ul>
              <button className={styles.buttonPrimary}>Choose This Plan</button>
            </div>
            <div className={styles.planCard}>
              <h3>Premium</h3>
              <p className={styles.planPrice}>$100,000 minimum</p>
              <ul>
                <li>✓ Personalized portfolio</li>
                <li>✓ Weekly rebalancing</li>
                <li>✓ Weekly insights & alerts</li>
                <li>✓ Monthly advisor calls</li>
                <li>✓ Tax optimization</li>
                <li>✓ Dedicated support</li>
              </ul>
              <button className={styles.button}>Contact for Details</button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>How It Works</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Complete Assessment</h3>
              <p>Tell us about your goals, timeline, and risk tolerance.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Portfolio Design</h3>
              <p>We create a custom investment strategy tailored to you.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Automated Investing</h3>
              <p>Your funds are invested across diversified assets.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>Monitor & Rebalance</h3>
              <p>We continuously monitor and rebalance based on market conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready to Start Your Investment Journey?</h2>
        <p>Join hundreds of investors building long-term wealth</p>
        <button className={styles.buttonLarge}>Open Your Account</button>
      </section>
    </div>
  );
}
