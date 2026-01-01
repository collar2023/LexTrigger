/**
 * LexTrigger-CLI 离线恢复脚本 (原生 Crypto 版)
 * 用法: node LexTrigger-CLI.js <分片1> <分片2> <加密包路径>
 */
const fs = require('fs');
const crypto = require('crypto');
const secrets = require('secrets.js-grempe');

const args = process.argv.slice(2);
if (args.length < 3) {
    console.log("用法: node LexTrigger-CLI.js <分片1> <分片2> <加密包路径>");
    process.exit(1);
}

const [shard1, shard2, payloadPath] = args;

try {
    console.log("--- LexTrigger 全球高价值信息灾难恢复程序 ---");
    
    // 1. 合并 Shamir 分片，还原 AES 原始密钥
    console.log("[1/3] 正在利用数学方法合成密钥分片...");
    const combinedHexKey = secrets.combine([shard1, shard2]);
    const keyBuffer = Buffer.from(combinedHexKey, 'hex');
    console.log("🔑 密钥还原成功！");

    // 2. 读取本地加密包 (.bin)
    console.log("[2/3] 正在载入加密容器...");
    const encryptedData = fs.readFileSync(payloadPath);
    
    /**
     * 3. 执行 AES-256-GCM 核心解密
     * 数据结构解析:
     * [0...12 字节]: IV (初始化向量)
     * [12...末尾-16 字节]: Ciphertext (密文)
     * [末尾-16...末尾]: Auth Tag (GCM 认证标签，用于防篡改)
     */
    console.log("[3/3] 执行原生 AES-256-GCM 安全解密...");
    
    const iv = encryptedData.slice(0, 12);
    // 注意：GCM 模式在加密包末尾通常带有 16 字节的认证标签
    const authTag = encryptedData.slice(encryptedData.length - 16);
    const ciphertext = encryptedData.slice(12, encryptedData.length - 16);

    const decipher = crypto.createDecipheriv('aes-256-gcm', keyBuffer, iv);
    decipher.setAuthTag(authTag);

    const decrypted = Buffer.concat([
        decipher.update(ciphertext),
        decipher.final()
    ]);

    // 4. 输出结果
    const outPath = 'recovered_archive.zip';
    fs.writeFileSync(outPath, decrypted);

    console.log("-------------------------------");
    console.log("✅ 恭喜！高价值数据已成功通过离线审计并还原。");
    console.log(`📂 原始文件包已保存至: ${outPath}`);
    console.log("请解压该 ZIP 文件获取您的原始存证内容。");

} catch (error) {
    console.error("❌ 还原失败: 可能是密钥分片不匹配、密文损坏或认证标签不一致。");
    console.error("详细错误:", error.message);
}
