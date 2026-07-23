'use client';

import Link from 'next/link';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>Vertex Trading</div>
          <div className={styles.navLinks}>
            <Link href="/investing">Long-Term Investing</Link>
            <Link href="/managed">Managed Trading</Link>
            <Link href="/clock">Global Clock</Link>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Build Wealth Through Smart Trading</h1>
          <p>Professional investment management tailored to your goals</p>
          <div className={styles.heroButtons}>
            <button className={styles.buttonPrimary}>
              <Link href="/investing">Start Investing</Link>
            </button>
            <button className={styles.buttonSecondary}>
              <Link href="/managed">Learn About Managed Trading</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className={styles.valueSection}>
        <div className={styles.container}>
          <h2>Why Choose Vertex Trading?</h2>
          <div className={styles.valueGrid}>
            <div className={styles.valueCard}>
              <div className={styles.icon}>📊</div>
              <h3>Data-Driven Strategies</h3>
              <p>Our algorithms analyze market trends to identify profitable opportunities.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.icon}>🛡️</div>
              <h3>Risk Management</h3>
              <p>Diversified portfolios designed to protect your capital in volatile markets.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.icon}>📈</div>
              <h3>Proven Returns</h3>
              <p>Consistent performance with average annual returns of 12-18% over 5 years.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.icon}>🤝</div>
              <h3>Expert Support</h3>
              <p>Dedicated account managers available to guide your investment journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={styles.pricingSection}>
        <div className={styles.container}>
          <h2>Investment Tiers</h2>
          <p className={styles.pricingSubtitle}>Choose the plan that fits your investment goals</p>
          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <h3>Starter</h3>
              <div className={styles.price}>$5,000<span>/min</span></div>
              <p>Perfect for first-time investors</p>
              <ul>
                <li>✓ Managed portfolio</li>
                <li>✓ Quarterly reports</li>
                <li>✓ Email support</li>
                <li>✗ Personal advisor</li>
              </ul>
              <button className={styles.buttonOutline}>Get Started</button>
            </div>
            <div className={`${styles.pricingCard} ${styles.featured}`}>
              <span className={styles.badge}>Most Popular</span>
              <h3>Growth</h3>
              <div className={styles.price}>$25,000<span>/min</span></div>
              <p>For serious wealth builders</p>
              <ul>
                <li>✓ Custom portfolio</li>
                <li>✓ Monthly reports</li>
                <li>✓ Priority support</li>
                <li>✓ Quarterly reviews</li>
              </ul>
              <button className={styles.buttonPrimary}>Choose Plan</button>
            </div>
            <div className={styles.pricingCard}>
              <h3>Managed Pro</h3>
              <div className={styles.price}>$100,000<span>/min</span></div>
              <p>Hands-off, fully managed service</p>
              <ul>
                <li>✓ Full portfolio management</li>
                <li>✓ Weekly updates</li>
                <li>✓ Dedicated advisor</li>
                <li>✓ Tax optimization</li>
              </ul>
              <button className={styles.buttonOutline}>Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Ready to Start Your Investment Journey?</h2>
        <p>Join hundreds of investors building wealth with Vertex Trading</p>
        <button className={styles.buttonLarge}>
          <Link href="/investing">Open Your Account Today</Link>
        </button>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h4>Vertex Trading</h4>
              <p>Professional investment management for wealth growth.</p>
            </div>
            <div className={styles.footerSection}>
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/investing">Long-Term Investing</Link></li>
                <li><Link href="/managed">Managed Trading</Link></li>
                <li><Link href="/clock">Global Clock</Link></li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Disclosures</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2026 Vertex Trading. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
