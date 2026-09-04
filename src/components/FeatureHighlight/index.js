import React from 'react';
import styles from './styles.module.css';

/**
 * A visually emphasized feature entry for release notes / "what's new" content.
 * Usage inside an .md/.mdx file:
 *
 *   <FeatureHighlight title="SLMC Integration" tag="New">
 *     Centralized setup and licensing console — streamlines installation
 *     and reduces manual configuration steps.
 *   </FeatureHighlight>
 */
export default function FeatureHighlight({title, tag = 'New', children}) {
  return (
    <div className={styles.card}>
      <div className={styles.tagRow}>
        <span className={styles.tag}>{tag}</span>
        <h4 className={styles.title}>{title}</h4>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
