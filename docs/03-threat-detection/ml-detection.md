---
title: ML-Based Detection
sidebar_position: 3
description: Behavioral and machine-learning-based threat detection.
---

import CapabilityMeta from '@site/src/components/CapabilityMeta';

<CapabilityMeta status="GA" since="1.5" category="Threat Detection" forrester="BM7" />

Vehere NDR uses machine learning models trained on network behavior to detect anomalies and threats that signature and IOC-based methods miss — including lateral movement and encrypted-traffic anomalies.

## Baselining

Detection models baseline against normal network behavior per-environment and support re-baselining as network behavior legitimately changes over time, to keep false-positive rates manageable.

:::note Forrester BM7 — Detection Model Maintenance Burden
Baselining and re-baselining are documented here specifically to give evaluators visibility into detection-model upkeep.
:::
