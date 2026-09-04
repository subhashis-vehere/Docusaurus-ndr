import React from 'react';
import styles from './styles.module.css';

export default function CapabilityMeta({status = 'GA', since, category, forrester}) {
  return (
    <div className={styles.metaRow}>
      <span className={`${styles.pill} ${status === 'GA' ? styles.ga : ''}`}>
        ● {status}{since ? ` — Available since ${since}` : ''}
      </span>
      {category && <span className={styles.pill}>Category: {category}</span>}
      {forrester && <span className={styles.pill}>Forrester: {forrester}</span>}
    </div>
  );
}
