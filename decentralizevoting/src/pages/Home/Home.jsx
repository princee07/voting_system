import React from 'react';
import WalletConnection from "../../components/wallet connection/WalletConnection";

import styles from './Home.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.logo}>Decentralized Voting</div>
        <button className={styles.connectWallet}>Connect Wallet</button>
        <WalletConnection />
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Your Vote, Your Voice</h1>
          <p className={styles.subtitle}>A transparent, secure, and fair way to vote using blockchain technology.</p>
          <button className={styles.getStartedButton}>Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.feature}>
          <h3>Transparency</h3>
          <p>Every vote is publicly verifiable on the blockchain.</p>
        </div>
        <div className={styles.feature}>
          <h3>Security</h3>
          <p>Blockchain ensures your vote is tamper-proof and safe.</p>
        </div>
        <div className={styles.feature}>
          <h3>Fairness</h3>
          <p>A system that ensures equality for every voter.</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks}>
        <h2>How It Works</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <h3>1. Connect Wallet</h3>
            <p>Start by connecting your cryptocurrency wallet.</p>
          </div>
          <div className={styles.step}>
            <h3>2. Select a Vote</h3>
            <p>Choose an ongoing vote to participate in.</p>
          </div>
          <div className={styles.step}>
            <h3>3. Cast Your Vote</h3>
            <p>Make your choice and submit your vote securely.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>© 2024 Decentralized Voting System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
