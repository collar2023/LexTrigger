# LexTrigger-CLI Usage Guide / 使用说明书

> **Offline Disaster Recovery Tool for GHVICES**
> **全球高价值信息存证系统 - 离线灾难恢复工具**

---

## 1. Overview / 概述

LexTrigger-CLI is an open-source tool designed to reconstruct high-value data without depending on the platform. It utilizes **Shamir's Secret Sharing (2-of-3)** and **AES-256-GCM** to decrypt the data container.

本工具用于在不依赖平台的情况下离线还原数据。采用 **Shamir 门限 (2-of-3)** 合成密钥，并配合 **AES-256-GCM** 算法解密。

---

## 2. Requirements / 环境要求

* **Runtime**: Node.js **v16.x** or higher.
* **Dependency**: `npm install secrets.js-grempe`

---

## 3. Preparation / 准备工作

You need **ANY TWO** of the following three shards:
您需要集齐以下 **3 个分片中的任意 2 个**：

*   **Shard 1**: Held by **Owner** (Sent via Email) | **当事人持有**
*   **Shard 2**: Held by **Executor** (Sent via Email) | **执行人持有**
*   **Shard 3**: Held by **Platform** (Released upon Logic Trigger) | **平台托管**

**Required Files / 必需文件:**
1.  `LexTrigger-CLI.js` (This script)
2.  `encrypted_payload.bin` (The encrypted data file downloaded from cloud / 原始加密数据包)

---

## 4. Execution / 执行命令

Run the following command in your terminal:
在终端中执行：

```bash
node LexTrigger-CLI.js <SHARD_X> <SHARD_Y> <PATH_TO_PAYLOAD>
```

**Example / 示例:**

```bash
# Combine Owner's Shard 1 + Executor's Shard 2
node LexTrigger-CLI.js 801f...a3c 802d...b9f ./backup_payload.bin
```

---

## 5. Output / 结果

If successful, the tool will:
1.  Reconstruct the AES-256 key.
2.  Decrypt the content.
3.  Save the restored file (e.g., `restored_message.txt` or `restored_files.zip`) to the current directory.

若成功，工具将：
1.  合成 AES-256 密钥。
2.  解密内容。
3.  将还原的文件（如 `restored_message.txt` 或 `restored_files.zip`）保存至当前目录。
