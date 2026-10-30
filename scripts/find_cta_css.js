const fs = require('fs');
const lines = fs.readFileSync('src/app/globals.css', 'utf8').split('\n');
lines.forEach((l, i) => {
  if (l.includes('cta-banner-info')) {
    console.log(`${i+1}: ${l}`);
  }
});
