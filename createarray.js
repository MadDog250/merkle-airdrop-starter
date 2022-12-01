const fs = require('fs');
const path = require('path');
const readline = require('readline');

async function exportObj() {

  let content = {};
  let a = [];
  const fileStream = fs.createReadStream('./src/airdrop.csv');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let index = 0;
  for await (const line of rl) {
    a.push(line);
    index++;
  }

  content.airdrop = a;
  const result = JSON.stringify(content);
  console.log(result)
  fs.writeFileSync("../generator/new-config.json", result);
}

exportObj();
