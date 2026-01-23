# LexTrigger CLI
### Offline Recovery Tool for Digital Vault
### 数字意愿库 - 离线救援与还原工具

> **Project URL / 项目地址**: [https://vault.aillm.net](https://vault.aillm.net)
> **License**: MIT (Open Source)

---

## 1. Introduction / 简介

**LexTrigger** is the open-source client-side tool for **Digital Vault** (Global Intention Custody System).
It allows users to reconstruct the AES-256 encryption key and decrypt their high-value data offline, independent of the platform.

**LexTrigger** 是 **Digital Vault 数字意愿库** 的开源离线客户端。
它允许用户在完全脱离平台的情况下，通过组合密钥分片，在本地合成 AES-256 密钥并解密原始数据。

---

## 2. Core Mechanism / 核心机制

The system uses **Shamir's Secret Sharing (2-of-3)**. You need **ANY TWO** shards to recover the full key:
系统采用 **Shamir 门限 (2-of-3)** 机制。您只需集齐以下 **3 片中的任意 2 片** 即可完成还原：

*   **Shard 1**: Held by **Principal** (Sent via Email at creation) | **委托人持有**
*   **Shard 2**: Held by **Recipient** (Sent via Email at creation) | **受托人持有**
*   **Shard 3**: Held by **Platform** (Released only upon 12-month silence) | **平台托管**

---

## 3. Recovery Scenarios / 还原场景

### ✅ Scenario A: Rescue (委托人数据救援)
> **When:** The Principal loses the original file but is still active.
> **适用场景:** 委托人丢失了原始文件，但人身安全且活跃。

1.  **Principal** provides **Shard 1**.
2.  **Recipient** provides **Shard 2**.
3.  Combine **Shard 1 + Shard 2** to decrypt the backup file downloaded from the cloud.
    *(Requires cooperation between Principal and Recipient)*

### ✅ Scenario B: Disclosure (受托人披露执行)
> **When:** The Principal has been silent for >12 months, and the platform has released Shard 3.
> **适用场景:** 委托人失联超过 12 个月，平台已通过邮件释放了 Shard 3。

1.  **Recipient** retrieves **Shard 2** (from their own inbox).
2.  **Recipient** receives **Shard 3** (from Platform's release email).
3.  Combine **Shard 2 + Shard 3** to decrypt the data locally.
    *(No Principal involvement required)*

---

## 4. Usage / 使用说明

### Prerequisites / 环境要求
*   Node.js (v16+)
*   Install dependencies:
    ```bash
    npm install
    # OR
    npm install secrets.js-grempe
    ```

### Command / 命令
```bash
node LexTrigger-CLI.js <SHARD_A> <SHARD_B> <PATH_TO_ENCRYPTED_FILE>
```

### Examples / 演示

**Example 1: Rescue (Shard 1 + Shard 2)**
```bash
node LexTrigger-CLI.js 801f...key1 802d...key2 ./my_vault_backup.bin
```

**Example 2: Disclosure (Shard 2 + Shard 3)**
```bash
node LexTrigger-CLI.js 802d...key2 805a...key3 ./pda_backup.bin
```

---

## 5. Security Note / 安全提示

*   ⚠️ **Offline First**: For maximum security, run this tool on a computer disconnected from the internet.
*   ⚠️ **Verify Integrity**: Ensure the downloaded `.bin` file matches the hash on the blockchain (via Solscan).
*   ⚠️ **Data Privacy**: This tool runs entirely locally. Your keys and data are never sent to any server.
