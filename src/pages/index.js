import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const stages = [
  {icon: '📡', name: 'Capture', sub: 'packets & metadata'},
  {icon: '🛡️', name: 'Detect', sub: 'signatures · IOC · ML'},
  {icon: '🔍', name: 'Investigate', sub: 'Data Grid · PCAP'},
  {icon: '🔔', name: 'Enrich', sub: 'alert context'},
  {icon: '🎯', name: 'Hunt', sub: 'IOC & behavioral'},
  {icon: '📁', name: 'Case', sub: 'link analysis'},
  {icon: '⚡', name: 'Respond', sub: 'SOAR · integrations'},
];

const capabilities = [
  {
    eyebrow: 'Detect', title: 'Network Detection & Response', icon: '🛡️',
    desc: 'Detect known and unknown threats using signatures, IOC/IOA matching, behavioral analytics, and ML-based detection.',
    href: '/docs/threat-detection/signature-detection', tone: 'red',
  },
  {
    eyebrow: 'Investigate', title: 'Investigation & Threat Hunting', icon: '🔍',
    desc: 'Investigate alerts, sessions, and metadata in the Data Grid; hunt proactively across historical traffic.',
    href: '/docs/overview/what-is-ndr', tone: 'redDim',
  },
  {
    eyebrow: 'Capture', title: 'Full Packet Capture & Forensics', icon: '📡',
    desc: 'Capture and retain full network traffic for session reconstruction, protocol analysis, and forensic replay.',
    href: '/docs/architecture-deployment/storage-retention', tone: 'ember',
  },
  {
    eyebrow: 'Analyze', title: 'AI & Machine Learning', icon: '🧠',
    desc: 'ML-based detection, baselining, and alert triage assist analysts in prioritizing and enriching alerts at scale.',
    href: '/docs/threat-detection/ml-detection', tone: 'charcoal',
  },
  {
    eyebrow: 'Integrate', title: 'Security Ecosystem', icon: '🔗',
    desc: 'Connect Vehere to SIEM, SOAR, Active Directory, threat intelligence feeds, and existing security platforms.',
    href: '/docs/integrations/active-directory', tone: 'maroon',
  },
  {
    eyebrow: 'Deploy', title: 'Architecture & Deployment', icon: '🏗️',
    desc: 'Distributed deployment models, high availability, hardware sizing, and storage/retention planning.',
    href: '/docs/architecture-deployment/high-availability', tone: 'grey',
  },
];

const releases = [
  {version: '1.8.3', title: 'AI alert triage GA, AD correlation performance', date: '12 Aug 2026'},
  {version: '1.8.2', title: 'TLS fingerprinting coverage expanded', date: '02 Jul 2026'},
  {version: '1.8.1', title: 'SOAR playbook trigger improvements', date: '18 Jun 2026'},
  {version: '1.8.0', title: 'Intelligent whitelisting, Data Grid performance overhaul', date: '04 May 2026'},
];

export default function Home() {
  const radius = 138;
  const stageAngle = 360 / stages.length;

  return (
    <Layout
      title="Vehere NDR Product Guide"
      description="Architecture, capabilities, integrations, and investigation workflows for Vehere Network Detection and Response.">

      <div className={styles.page}>

      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={styles.eyebrow}><span className={styles.dot} />Public Product Documentation</div>
              <h1 className={styles.h1}>Detect. Investigate. Understand. <span>Respond.</span></h1>
              <p className={styles.sub}>
                A technical guide to Vehere Network Detection and Response — architecture, capabilities,
                integrations, and investigation workflows, documented for security teams and technical evaluators.
              </p>
              <div className={styles.heroActions}>
                <Link className={`${styles.btn} ${styles.btnPrimary}`} to="/docs/overview/what-is-ndr">
                  Explore Capabilities
                </Link>
                <Link className={`${styles.btn} ${styles.btnGhost}`} to="/docs/overview/architecture">
                  Architecture
                </Link>
                <Link className={`${styles.btn} ${styles.btnGhost}`} to="/docs/reference/release-notes">
                  What's New in 1.8.3
                </Link>
              </div>
            </div>

            <div className={styles.circleWrap} style={{width: radius * 2 + 96, height: radius * 2 + 96}}>
              <div className={styles.circleTrack} />
              <div className={styles.circleSweep} />
              <div className={styles.circleCenter}>
                <div className={styles.circleCenterLabel}>How NDR<br />Works</div>
              </div>
              {stages.map((s, i) => {
                const angleRad = ((stageAngle * i) - 90) * (Math.PI / 180);
                const x = radius * Math.cos(angleRad);
                const y = radius * Math.sin(angleRad);
                return (
                  <div
                    className={styles.circleStage}
                    key={s.name}
                    style={{transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`}}>
                    <div className={styles.stageDot}>{s.icon}</div>
                    <div className={styles.stageName}>{s.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* CAPABILITY CARDS */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <div className={styles.sectionEyebrow}>Product Capabilities</div>
            <h2 className={styles.sectionTitle}>What Vehere NDR does</h2>
            <p className={styles.sectionDesc}>
              Six capability areas make up the platform end to end — from raw traffic to a completed investigation.
            </p>
          </div>
          <div className={styles.capGrid}>
            {capabilities.map((c) => (
              <Link to={c.href} key={c.title} className={`${styles.capCard} ${styles[c.tone]}`}>
                <div className={styles.capIcon}>{c.icon}</div>
                <div className={styles.capEyebrow}>{c.eyebrow}</div>
                <h3 className={styles.capTitle}>{c.title}</h3>
                <p className={styles.capDesc}>{c.desc}</p>
                <div className={styles.capLink}>Read more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EVIDENCE STRIP */}
      <div className={styles.wrap}>
        <div className={styles.evidence}>
          <div className={styles.evidenceCopy}>
            <div className={styles.sectionEyebrowRed}>Built for independent verification</div>
            <h3>Every capability maps to a stable, public URL</h3>
            <p>Analysts and evaluators can reference specific documentation topics directly — no restricted manuals required.</p>
          </div>
          <div className={styles.evidenceChain}>
            <div className={styles.evNode}>Investigation Workflow</div>
            <div className={styles.evArrow}>→</div>
            <div className={styles.evNode}>Capability: Data Grid + PCAP</div>
            <div className={styles.evArrow}>→</div>
            <div className={`${styles.evNode} ${styles.evNodeHi}`}>/docs/integrations/active-directory</div>
          </div>
        </div>
      </div>

      {/* RELEASE NOTES HIGHLIGHT */}
      <div className={styles.wrap}>
        <div className={styles.release}>
          <div className={styles.releaseMain}>
            <div className={styles.releaseEyebrow}>
              <span className={styles.releaseBadge}>Latest</span>Release Notes
            </div>
            <h2>What's New in NDR 1.8.3</h2>
            <p>Every release ships with public, version-tagged notes — so capabilities are documented the moment they go GA, not months later.</p>
            <ul className={styles.releaseHighlights}>
              <li><span className={styles.tag}>NEW</span>AI-assisted alert triage now generally available across all sensor tiers</li>
              <li><span className={styles.tag}>IMPROVED</span>Active Directory correlation latency reduced for large-scale deployments</li>
              <li><span className={styles.tag}>FIX</span>Elasticsearch HA failover stability improvements</li>
            </ul>
            <div className={styles.releaseActions}>
              <Link className={`${styles.btn} ${styles.btnPrimary}`} to="/docs/reference/release-notes">
                Read Release Notes
              </Link>
            </div>
          </div>
          <div className={styles.releaseLog}>
            <div className={styles.releaseLogLabel}>Recent Releases</div>
            {releases.map((r) => (
              <div className={styles.logItem} key={r.version}>
                <div className={styles.logVersion}>{r.version}</div>
                <div>
                  <div className={styles.logTitle}>{r.title}</div>
                  <div className={styles.logDate}>{r.date}</div>
                </div>
              </div>
            ))}
            <Link className={styles.logViewAll} to="/docs/reference/release-notes">
              View all release notes →
            </Link>
          </div>
        </div>
      </div>

      </div>
    </Layout>
  );
}
