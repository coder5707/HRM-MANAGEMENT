/**
 * Run this script ONCE while you have internet access:
 *   node download-fonts.js
 *
 * It downloads all fonts into frontend/src/assets/fonts/
 * After that your project works completely offline.
 */

const https = require('https');
const fs    = require('fs');
const path  = require('path');

const OUT = path.join(__dirname, 'frontend', 'src', 'assets', 'fonts');
fs.mkdirSync(OUT, { recursive: true });

const FILES = [
  // Material Icons
  {
    file: 'MaterialIcons-Regular.woff2',
    url:  'https://fonts.gstatic.com/s/materialicons/v140/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
  },
  {
    file: 'MaterialIcons-Regular.woff',
    url:  'https://fonts.gstatic.com/s/materialicons/v140/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.woff',
  },
  // Plus Jakarta Sans weights
  {
    file: 'PlusJakartaSans-300.woff2',
    url:  'https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_q07NSg.woff2',
  },
  {
    file: 'PlusJakartaSans-400.woff2',
    url:  'https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_KU7NSg.woff2',
  },
  {
    file: 'PlusJakartaSans-500.woff2',
    url:  'https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_-07NSg.woff2',
  },
  {
    file: 'PlusJakartaSans-600.woff2',
    url:  'https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_FkzNSg.woff2',
  },
  {
    file: 'PlusJakartaSans-700.woff2',
    url:  'https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_b0zNSg.woff2',
  },
  {
    file: 'PlusJakartaSans-800.woff2',
    url:  'https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_907NSg.woff2',
  },
  // Space Mono
  {
    file: 'SpaceMono-Regular.woff2',
    url:  'https://fonts.gstatic.com/s/spacemono/v13/i7dPIFZifjKcF5UAWdDRUEZ2RFq7AwU.woff2',
  },
  {
    file: 'SpaceMono-Bold.woff2',
    url:  'https://fonts.gstatic.com/s/spacemono/v13/i7dMIFZifjKcF5UAWdDRYERMR3GuIkmrtiM.woff2',
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

(async () => {
  console.log('Downloading fonts to:', OUT);
  for (const { file, url } of FILES) {
    const dest = path.join(OUT, file);
    process.stdout.write(`  ${file} ... `);
    try {
      await download(url, dest);
      const kb = Math.round(fs.statSync(dest).size / 1024);
      console.log(`✓ (${kb} KB)`);
    } catch (e) {
      console.log(`✗ FAILED: ${e.message}`);
    }
  }
  console.log('\nAll done! Your project is now offline-ready.');
})();
