---
title: NDR Pro 1.8.1
sidebar_position: 1
description: Release notes for NDR Pro 1.8.1 — new features, enhancements, bug fixes, and partition sizing.
---

import CapabilityMeta from '@site/src/components/CapabilityMeta';
import FeatureHighlight from '@site/src/components/FeatureHighlight';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<CapabilityMeta status="GA" since="1.8.1" category="Release Notes" />

The Release Note for **NDR Pro 1.8.1** outlines key new features and enhancements, including the removal of Kibana dependency, a revamped user interface, and upgraded Data Grid functionalities. It also includes a detailed list of bug fixes across various system components.

<Tabs>
  <TabItem value="new" label="New Features & Enhancements" default>

    <FeatureHighlight title="SLMC Integration" tag="New">
      Vehere's Setup & Licensing Management Console (SLMC) centralizes key setup procedures, eliminating the need for manual, error-prone backend commands. It streamlines software installations, automates critical processes, and accelerates deployment speed.
    </FeatureHighlight>

    <FeatureHighlight title="Kibana Dependency Removed" tag="Improved">
      The platform no longer relies on Kibana, leading to a more streamlined and independent architecture.
    </FeatureHighlight>

    <FeatureHighlight title="User Interface Overhaul" tag="Improved">
      The user interface has been completely redesigned to offer a cleaner, more intuitive, and modern experience — including a new Navigation Panel structure and a one-click Configuration button.
    </FeatureHighlight>

    <FeatureHighlight title="Toolbar & Global Search" tag="New">
      A new toolbar is available across multiple modules with Save, Open, Export, Reset, and Timeline actions. Global Search has also been added across modules for faster data access.
    </FeatureHighlight>

    <FeatureHighlight title="Login Security Enhancements" tag="Improved">
      A CAPTCHA is now displayed after 3 failed login attempts. After 5 failed attempts, login is temporarily blocked for 30 seconds.
    </FeatureHighlight>

    <FeatureHighlight title="Mandatory Database & Redis Passwords" tag="Improved">
      Database (Elasticsearch) and Redis passwords are now mandatory, enhancing data safety and service isolation.
    </FeatureHighlight>

    <FeatureHighlight title="Data Grid Redesign" tag="Improved">
      The Data Grid has been redesigned for improved usability, featuring a new hamburger menu for quick filtering. IP Decoding is now known as Reconstruction.
    </FeatureHighlight>

    <FeatureHighlight title="Pagination" tag="Improved">
      Records are now paginated by default (500 per page, up to 2000 per page) across Data Grid and Audit Trail.
    </FeatureHighlight>

    <FeatureHighlight title="Dashboard, Link Analysis & Reports" tag="Improved">
      The Dashboard has a cleaner design with export-to-PDF options. Link Analysis features an entirely new interface (Map View has been deprecated). Reports now support enhanced charts, graphs, and statistics.
    </FeatureHighlight>

    <FeatureHighlight title="Health Module" tag="Improved">
      Updated visual design with dynamic, exportable widgets.
    </FeatureHighlight>

    <FeatureHighlight title="Roles & Users" tag="Improved">
      Redesigned UI for a more intuitive user and role management experience.
    </FeatureHighlight>

    <FeatureHighlight title="Notifications" tag="New">
      A notification icon has been added to provide real-time alerts and updates.
    </FeatureHighlight>

  </TabItem>

  <TabItem value="fixes" label="Bug Fixes">

    - Resolved an issue where a network metadata field was incorrectly populated with the browser version number instead of the actual machine IP address.
    - Fixed an issue where the ML Whitelist failed to suppress alerts from IP addresses added for whitelisting.

  </TabItem>

  <TabItem value="known" label="Known Issues">

    Not Available.

  </TabItem>

  <TabItem value="sizing" label="Partition Sizing Details">

    #### 10 Gbps NDR Pro Solution

    | Partition | Requirement | Notes |
    |---|---|---|
    | EFI Partition | 50 GB | Boot partition |
    | Root ("/") | 500 GB | — |
    | Log ("/var/log") | 600 GB | System and log file storage |
    | Vehere ("/var/log/vehere") | 2.69 TB | Probe and alert metadata storage |
    | Elasticsearch | 75 TB | 89-day metadata retention @ ~800 GB/day |
    | Raw ("/var/lib/raw") | 750 TB | 7-day raw retention @ 1.25 GB/sec |

    #### 5 Gbps NDR Pro Solution

    | Partition | Requirement | Notes |
    |---|---|---|
    | EFI Partition | 50 GB | Boot partition |
    | Root ("/") | 500 GB | — |
    | Log ("/var/log") | 600 GB | System and log file storage |
    | Vehere ("/var/log/vehere") | 2.69 TB | Probe and alert metadata storage |
    | Elasticsearch | 48 TB | 89-day metadata retention @ ~396.5 GB/day |
    | Raw ("/var/lib/raw") | 371 TB | 7-day raw retention @ 640 MB/sec |

    #### 1 Gbps NDR Pro Solution

    | Partition | Requirement | Notes |
    |---|---|---|
    | EFI Partition | 50 GB | Boot partition |
    | Root ("/") | 500 GB | — |
    | Log ("/var/log") | 400 GB | System and log file storage |
    | Vehere ("/var/log/vehere") | 1 TB | Probe and alert metadata storage |
    | Elasticsearch | 7.5 TB | 89-day metadata retention @ ~81.2 GB/day |
    | Raw ("/var/lib/raw") | 74 TB | 7-day raw retention @ 128 MB/sec |

  </TabItem>

  <TabItem value="hardware-sizing" label="Hardware Sizing and Details">

    Reference sizing guidance for NDR Pro deployments — see [Hardware Sizing](/docs/architecture-deployment/hardware-sizing) for general planning, or contact your Vehere deployment engineer for a release-specific sizing worksheet.

  </TabItem>
</Tabs>
