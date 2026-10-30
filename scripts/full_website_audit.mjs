import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const ARTIFACT_DIR = 'C:/Users/USER/.gemini/antigravity/brain/77642d7f-724b-46ea-91d1-39d0ad8984a5';
const EDGE_PATH = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';

const ROUTES = [
  '/',
  '/about',
  '/approach',
  '/contact',
  '/faq',
  '/team',
  '/services',
  '/services/mental-wellbeing-counselling',
  '/services/health-guidance-test-results',
  '/services/support-older-adults-families',
  '/services/ongoing-health-concerns',
  '/services/understanding-medical-options',
  '/resources',
  '/resources/the-interconnected-body-and-mind',
  '/resources/navigating-health-questions-with-clarity',
  '/resources/supporting-older-adults-at-home'
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 }
];

async function audit() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const auditReport = [];

  for (const route of ROUTES) {
    console.log(`Auditing: ${route}`);
    const pageErrors = [];
    const failedRequests = [];

    const page = await browser.newPage();
    page.on('console', msg => {
      if (msg.type() === 'error') {
        pageErrors.push(msg.text());
      }
    });
    page.on('requestfailed', req => {
      failedRequests.push({ url: req.url(), failure: req.failure()?.errorText });
    });
    page.on('response', res => {
      if (res.status() >= 400 && !res.url().includes('favicon')) {
        failedRequests.push({ url: res.url(), status: res.status() });
      }
    });

    const routeData = {
      route,
      pageErrors,
      failedRequests,
      viewports: {}
    };

    for (const vp of VIEWPORTS) {
      await page.setViewport({ width: vp.width, height: vp.height });
      await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle0' });
      await new Promise(r => setTimeout(r, 400));

      const evaluation = await page.evaluate((vpWidth) => {
        // Horizontal overflow check
        const docWidth = document.documentElement.scrollWidth;
        const bodyWidth = document.body.scrollWidth;
        const maxScrollWidth = Math.max(docWidth, bodyWidth);
        const hasOverflow = maxScrollWidth > vpWidth;

        // Image check
        const images = Array.from(document.querySelectorAll('img'));
        const brokenImages = images.filter(img => !img.complete || img.naturalWidth === 0).map(img => img.src);

        // Heading hierarchy check
        const h1s = Array.from(document.querySelectorAll('h1')).map(h => h.innerText.trim());
        const h2s = Array.from(document.querySelectorAll('h2')).map(h => h.innerText.trim());

        // Buttons and links
        const emptyLinks = Array.from(document.querySelectorAll('a'))
          .filter(a => !a.getAttribute('href') || a.getAttribute('href') === '#')
          .map(a => a.innerText.trim() || 'unlabeled link');

        return {
          vpWidth,
          maxScrollWidth,
          hasOverflow,
          overflowAmount: hasOverflow ? maxScrollWidth - vpWidth : 0,
          imageCount: images.length,
          brokenImages,
          h1Count: h1s.length,
          h1s,
          h2Count: h2s.length,
          emptyLinksCount: emptyLinks.length,
          emptyLinks: emptyLinks.slice(0, 5)
        };
      }, vp.width);

      routeData.viewports[vp.name] = evaluation;
    }

    // Capture screenshot on desktop and mobile
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle0' });
    const cleanRouteName = route === '/' ? 'home' : route.replace(/\//g, '_').replace(/^_/, '');
    await page.screenshot({ path: path.join(ARTIFACT_DIR, `audit_${cleanRouteName}_desktop.png`), fullPage: false });

    await page.setViewport({ width: 390, height: 844 });
    await page.screenshot({ path: path.join(ARTIFACT_DIR, `audit_${cleanRouteName}_mobile.png`), fullPage: false });

    auditReport.push(routeData);
    await page.close();
  }

  await browser.close();

  fs.writeFileSync(
    path.join(ARTIFACT_DIR, 'audit_results.json'),
    JSON.stringify(auditReport, null, 2)
  );

  console.log('=== AUDIT SUMMARY ===');
  for (const item of auditReport) {
    const overflowDesktop = item.viewports.desktop?.hasOverflow;
    const overflowTablet = item.viewports.tablet?.hasOverflow;
    const overflowMobile = item.viewports.mobile?.hasOverflow;
    const errors = item.pageErrors.length;
    const fails = item.failedRequests.length;
    const broken = item.viewports.desktop?.brokenImages.length;
    console.log(
      `${item.route.padEnd(45)} | Errors: ${errors} | 404s: ${fails} | Broken Img: ${broken} | Overflow: D:${overflowDesktop ? 'YES' : 'no'} T:${overflowTablet ? 'YES' : 'no'} M:${overflowMobile ? 'YES' : 'no'}`
    );
  }
}

audit().catch(console.error);
