This guide provides instructions for using the **LexTrigger-CLI** tool to perform disaster recovery for the **Global High-Value Information Custody & Execution System (GHVICES)**.

---

# LexTrigger-CLI Usage Guide

## 1. Overview

LexTrigger-CLI is an offline disaster recovery tool designed to reconstruct high-value data without depending on the GHVICES platform. It utilizes **Shamir's Secret Sharing (2-of-3)** to rebuild the encryption key and **AES-256-GCM** to decrypt the data container.

## 2. Environment Requirements

To run the script, ensure your environment meets the following criteria:

* **Runtime**: Node.js **v16.x** or higher.
* **Dependencies**:
* `secrets.js-grempe`: Required for Shamir Shard synthesis.
* *Note: The native `crypto` module is used for AES-GCM, so no additional encryption libraries are needed.*.



## 3. Preparation

Before running the recovery, gather the following components in a single folder:

1. **`LexTrigger-CLI.js`**: The recovery script.
2. **`package.json`**: Containing the dependency configuration.
3. **Two Shards**: Any two of the three shards (e.g., Owner Shard A + Executor Shard B, or one Shard + System Shard C).
4. **Encrypted Payload**: The `.bin` file (e.g., `LexPayload_xxxx.bin`).

### Install Dependencies

```bash
npm install secrets.js-grempe

```

## 4. Execution

Run the following command in your terminal:

```bash
node LexTrigger-CLI.js <SHARD_1> <SHARD_2> <PATH_TO_PAYLOAD>

```

**Example:**

```bash
node LexTrigger-CLI.js 801...abc 802...def payloads/LexPayload_tMe5kdgy.bin

```

## 5. Troubleshooting

* **"Cannot read properties of undefined"**: Ensure you are using the updated script version that utilizes the Node.js native `crypto` module.
* **"Decryption failed"**: Verify that the shards are correct and that the `.bin` file was not corrupted during download.

---

# LexTrigger-CLI 使用说明书

## 1. 概述

LexTrigger-CLI 是一款离线灾难恢复工具，旨在不依赖 GHVICES 平台的情况下还原高价值数据。它利用 **Shamir 门限方案 (2-of-3)** 合成密钥，并使用 **AES-256-GCM** 算法解密数据容器。

## 2. 运行环境

执行该脚本需要以下环境支持：

* **运行环境**: Node.js **v16.x** 或更高版本。
* **必要依赖**:
* `secrets.js-grempe`: 用于 Shamir 分片合成数学运算。
* *注：解密使用 Node.js 原生 `crypto` 模块，无需额外安装加密库。*。



## 3. 准备工作

在执行恢复程序前，请将以下材料置于同一文件夹内：

1. **`LexTrigger-CLI.js`**: 恢复脚本文件。
2. **`package.json`**: 依赖配置文件。
3. **两份密钥分片**: 3 个分片中的任意 2 个（如：持有者分片 A + 执行人分片 B）。
4. **加密数据包**: 下载的 `.bin` 原始文件。

### 安装依赖

```bash
npm install secrets.js-grempe

```

## 4. 执行恢复

在终端中输入以下命令：

```bash
node LexTrigger-CLI.js <分片1> <分片2> <加密包路径>

```

**示例：**

```bash
node LexTrigger-CLI.js 801...abc 802...def payloads/LexPayload_tMe5kdgy.bin

```

## 5. 常见问题

* **"Cannot read properties of undefined"**: 请确保您使用的是基于原生 `crypto` 模块更新后的脚本版本。
* **"还原失败 (Decryption failed)"**: 请检查分片字符是否输入完整，或确认 `.bin` 加密包在下载过程中是否保持完整。

---
