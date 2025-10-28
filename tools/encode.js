const fs = require('fs');
const bs58 = require('bs58');

// 定义要处理的文件列表
const files = [
  { input: '../conf/LunaTV-config.json', output: '../sub/LunaTV-config.txt' },
  { input: '../conf/jingjian.json', output: '../sub/jingjian.txt' },
  { input: '../conf/jin18.json', output: '../sub/jin18.txt' }
];

files.forEach(file => {
  if (!fs.existsSync(file.input)) {
    console.log(`⚠️ 文件不存在: ${file.input}`);
    return;
  }

  const data = fs.readFileSync(file.input);
  const encoded = bs58.encode(Buffer.from(data));
  fs.writeFileSync(file.output, encoded);
  console.log(`✅ 已生成 Base58 文件: ${file.output}`);
});
