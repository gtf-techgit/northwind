const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto('http://localhost:3000/home-loan', { waitUntil: 'networkidle' });
  const el = await page.$('section:has-text("Your Loan Journey")');
  if (el) {
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await el.screenshot({ path: 'loan-journey-desktop.png' });
  } else {
    await page.screenshot({ path: 'loan-journey-desktop.png', fullPage: true });
  }
  await page.setViewportSize({ width: 420, height: 900 });
  await page.waitForTimeout(300);
  const el2 = await page.$('section:has-text("Your Loan Journey")');
  if (el2) {
    await el2.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await el2.screenshot({ path: 'loan-journey-mobile.png' });
  }
  await browser.close();
})();
