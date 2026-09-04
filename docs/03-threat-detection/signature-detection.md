---
title: IDS / Signature Detection
sidebar_position: 1
description: Known-threat detection using signature and rule-based matching.
---

import CapabilityMeta from '@site/src/components/CapabilityMeta';

<CapabilityMeta status="GA" since="1.0" category="Threat Detection" />

Vehere NDR inspects network traffic against a continuously updated signature set to detect known threats, matching patterns in packet content, protocol behavior, and traffic metadata.

## How it works

Signatures are evaluated inline against decoded traffic at the capture layer. Matches generate alerts that carry the triggering signature, matched traffic context, and severity, which then flow into Alert Enrichment *(coming soon)* and investigation.

## Related topics

- [IOC / IOA Detection](./ioc-ioa-detection)
- [ML-Based Detection](./ml-detection)
