const fs = require('fs');
const path = require('path');

function search(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== '.next' && f !== 'node_modules') search(full);
    } else if (full.endsWith('.tsx') || full.endsWith('.ts') || full.endsWith('.css')) {
      const c = fs.readFileSync(full, 'utf8');
      if (c.includes('cta-banner-info') || c.includes('Care Navigation & Counselling') || c.includes('Care Navigation &amp; Counselling')) {
        console.log('Match:', full);
      }
    }
  }
}

search('src');
