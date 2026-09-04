---
title: Active Directory Integration
sidebar_position: 3
description: Correlate network activity with identity by connecting Vehere NDR to Active Directory.
---

import CapabilityMeta from '@site/src/components/CapabilityMeta';

<CapabilityMeta status="GA" since="1.6" category="Integrations" forrester="EM5" />

Vehere NDR integrates with Active Directory (AD) to associate network sessions, alerts, and detections with the identities and hosts recorded in AD. This closes the gap between "which host" and "which user" during investigation and threat hunting.

## How it works

Vehere polls or receives AD event data and correlates it against observed IP-to-user and IP-to-host mappings in real time. Once correlated, identity fields become searchable and filterable alongside network metadata in the Data Grid.

:::info Why it matters
Identity correlation lets analysts pivot from a detected session directly to the user and host involved, without cross-referencing a separate identity system.
:::

## Correlated fields

| Field | Source | Description |
|---|---|---|
| `user.name` | Active Directory | Authenticated user associated with the session |
| `host.name` | Active Directory | Registered hostname for the correlated IP |
| `group.membership` | Active Directory | AD group membership at time of session |
| `logon.type` | Active Directory | Logon event type associated with the session |

## Deployment notes

AD integration is configured once per deployment and applies across all sensors and nodes reporting into that instance. Detailed configuration steps are covered in the internal Administration Manual.

## Related topics

- Data Grid *(coming soon)*
- Threat Hunting *(coming soon)*
- [SIEM Integration](./siem)
- Case Management *(coming soon)*
