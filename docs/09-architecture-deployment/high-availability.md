---
title: High Availability
sidebar_position: 1
description: Elasticsearch HA and failover behavior in Vehere NDR.
---

import CapabilityMeta from '@site/src/components/CapabilityMeta';

<CapabilityMeta status="GA" since="1.5" category="Architecture & Deployment" forrester="BM6" />

Vehere NDR's central storage cluster (Elasticsearch) runs in a multi-node, replicated configuration. On node failure, traffic is rerouted to healthy nodes and indexing/query availability is preserved according to the configured replication factor.

## Related topics

- [Hardware Sizing](./hardware-sizing)
- [Storage & Retention](./storage-retention)
