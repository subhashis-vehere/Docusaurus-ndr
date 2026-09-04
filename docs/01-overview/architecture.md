---
title: NDR Architecture
sidebar_position: 3
description: High-level platform architecture for Vehere NDR.
---

Vehere NDR is deployed as a distributed platform: capture and processing nodes handle traffic close to the network edge, while a central cluster handles storage, correlation, and analyst-facing investigation.

```
Network Traffic → Capture Nodes → Processing & Detection → Central Storage (Elasticsearch) → Investigation & Case Management
```

See [Architecture & Deployment](../architecture-deployment/high-availability) for high availability, sizing, and retention planning.
