# 🔒 Global Vault
### Digital Will & Intention Custody System
### 全球数字意愿存证与可信交付系统
**Version: v2.1 (Compliance-Oriented)**

---

## 📌 Official Definition
**Global Vault** is a cryptographic custody, timestamping, and conditional disclosure service designed to preserve, audit, and release high-sensitivity personal intentions and digital information based on predefined rules, without executing legal, financial, or inheritance actions.

**Global Vault** 提供基于密码学的信息托管、可信时间戳与条件披露服务，用于固化、审计与释放高敏感个人意愿与数字信息，不执行任何法律、财务或继承行为。

---

## 🚫 1. 声明与责任边界 (DISCLAIMER)

*   **技术定位：** 本系统仅提供基于密码学的信息托管、时间戳锚定与条件披露服务，不提供法律咨询，不构成遗嘱、公证、信托或继承执行服务。
*   **法律效力说明：** 本系统生成的任何链上锚点、时间戳或交付记录，仅作为辅助证据层使用，不自动产生法律效力，亦不替代任何司法或公证文件。
*   **执行边界：** 本系统不会自动转移资产、资金、代币、NFT 或任何法律意义上的财产权利。所有披露行为仅限于加密材料的释放与通知。
*   **数据主权与不可恢复性：** 本系统采用零知识架构，平台不接触明文内容。若用户同时丢失：
    *   自持密钥分片
    *   原始加密数据包
    *   **技术上将永久无法恢复，平台无权访问或找回用户数据。**

---

## 🛡️ 2. 产品定位 (POSITIONING)

Global Vault 不是“Web3 遗嘱”，也不是“自动继承系统”。它的真实定位是：
**数字意愿存证与可信披露基础设施 (Digital Intention Custody & Conditional Disclosure Layer)**

适用对象包括但不限于：
*   数字遗嘱与家庭意愿说明
*   密码与私钥备忘
*   商业机密
*   个人信件与交代
*   法律文书草稿
*   身后指令说明
*   敏感数据托管

---

## 💎 3. 核心价值 (VALUE PROPOSITION)

### 3.1 高敏感信息托管 (High-Sensitivity Information Custody)
*   **AES-256-GCM** 金融级对称加密。
*   **Shamir’s Secret Sharing (2-of-3)** 门限分割。
*   平台不接触明文，不掌握完整密钥。用户始终保留至少一份分片。
*   原始加密包可离线保存。
*   **本系统仅履行“技术托管”职责，不构成信托或代理关系。**

### 3.2 基于规则的条件披露 (Rule-Based Conditional Disclosure)
系统通过“时间静默 + 邮箱活跃信号”判断是否满足披露条件：
*   **0–6 个月 (正常托管期)：** 系统定期向发起人发送“活跃确认链接”。
*   **6–9 个月 (预警期)：** 系统向发起人发送风险提醒。
*   **9–12 个月 (紧急期)：** 系统向预设执行人发送预警通知。
*   **12 个月以上 (披露条件成立)：** 系统向执行人释放平台托管的密钥分片 C，并发送领取通知。

**所有披露行为仅限于：密钥分片释放与通知发送，不涉及任何资产或法律权利转移。**

### 3.3 三层信任与证据闭环 (Triple-Layered Trust & Proof)

1.  **链上锚定闭环 (On-Chain Anchoring)：**
    *   所有内容哈希固化在 Solana 公链 Memo 中。
    *   时间戳不可篡改。
    *   所有 Gas 费用由系统代付，用户无需持有任何加密货币。

2.  **生命周期审计闭环 (Lifecycle Auditing)：**
    *   邮箱活跃性日志、风险提醒记录、披露触发时间点、分片释放行为记录。
    *   可为第三方审计与纠纷处理提供时间轴证据。

3.  **条件披露闭环 (Conditional Disclosure)：**
    *   严格基于用户事前授权规则，无人工干预，不可回滚，不可篡改。

### 3.4 极低摩擦用户体验 (Seamless Experience)
*   **无感上链：** 所有区块链交互由后端静默完成。
*   **无钱包要求：** 用户仅需邮箱即可使用。
*   **自动凭证分发：** 初始化完成后，包含密钥分片的 PDF 证书将自动发送至发起人与执行人邮箱。

---

## 🔍 4. 操作流程 (INSTRUCTION)

### 4.1 存证流程
1.  输入发起人与执行人邮箱。
2.  上传敏感数据。
3.  完成人机验证。
4.  系统自动完成：数据加密、分片生成、链上锚定、云端托管。

### 4.2 凭证持有
*   查收并下载 PDF 凭证。
*   本凭证包含用户自持密钥分片，建议打印并离线保存。

### 4.3 数据备份
*   下载并离线保存原始加密包 (.bin)。
*   若本地丢失，可凭 PDA 编号从云端恢复加密包。

### 4.4 披露与还原
1.  当静默时间 ≥ 12 个月，系统自动释放平台托管的分片 C。
2.  执行人收到领取通知，通过 OTP 验证身份。
3.  凑齐材料：分片 B（执行人持有）+ 分片 C（系统释放）+ 原始加密包。
4.  使用开源工具 **LexTrigger-CLI** 本地还原原始信息。

---

## 🛠️ 5. 技术规格 (TECH SPEC)

*   **Protocol:** SRD-V2 (Secure Remote Disclosure)
*   **Network:** Solana Mainnet (Gas Sponsored by Treasury)
*   **Storage:** Cloudflare R2 (Hot) + AWS Glacier Deep Archive (Cold)
*   **Encryption:** AES-256-GCM / Shamir’s Secret Sharing (2-of-3)
*   **Identity:** Email-Derived Ed25519 PDA

---

## ⚖️ 6. 法律与合规边界 (LEGAL BOUNDARY)

**本系统不构成：**
*   遗嘱服务 / 信托服务 / 公证服务 / 继承执行人

**本系统不自动：**
*   转移资产 / 执行遗产分配 / 调用任何链上合约 / 产生法律效力

**本系统仅提供：**
*   信息托管 / 时间戳锚定 / 条件披露 / 审计证据层

---

## 🧭 7. 产品愿景 (VISION)
Global Vault 的目标不是取代法律系统，而是为人类提供一个文明级的数字意愿基础设施：让个人意愿可以被可信固化，让时间点可以被不可篡改证明，让敏感信息可以被安全托管，让披露行为可以被规则约束。

---

## 📎 8. 重要提示 (IMPORTANT NOTICE)
*   本系统不保证披露后的任何法律后果。
*   不对用户因邮箱失效、设备丢失、社会工程攻击或第三方行为导致的损失承担责任。
*   用户应自行咨询律师 or 公证机构以获得具有法律效力的文件。

---
**🔚 END**