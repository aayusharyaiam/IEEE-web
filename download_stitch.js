const fs = require('fs');
const https = require('https');
const path = require('path');

const data = JSON.parse(fs.readFileSync('/home/aayush/.gemini/antigravity/brain/252c8877-b200-449e-a646-fac8236e1a85/.system_generated/steps/206/output.txt', 'utf8'));

const outDir = path.join(__dirname, 'stitch_reference');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function main() {
  for (const screen of data.screens) {
    if (screen.htmlCode && screen.htmlCode.downloadUrl) {
      const filename = `${screen.title.replace(/[^a-zA-Z0-9]/g, '_')}_${screen.deviceType}.html`;
      console.log(`Downloading ${filename}...`);
      await download(screen.htmlCode.downloadUrl, path.join(outDir, filename));
    }
  }
  console.log('All downloads finished.');
}

main();
