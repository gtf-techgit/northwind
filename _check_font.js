const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  const result = await page.evaluate(() => {
    const body = document.body;
    const div = body.querySelector('div');
    const h2 = document.querySelector('h2.font-heading');
    return {
      bodyFontFamily: getComputedStyle(body).fontFamily,
      bodyVarFontBody: getComputedStyle(body).getPropertyValue('--font-body'),
      bodyVarFontHeading: getComputedStyle(body).getPropertyValue('--font-heading'),
      divClass: div ? div.className : null,
      divVarFontBranley: div ? getComputedStyle(div).getPropertyValue('--font-branley') : null,
      divVarFontHeading: div ? getComputedStyle(div).getPropertyValue('--font-heading') : null,
      h2FontFamily: h2 ? getComputedStyle(h2).fontFamily : null,
      h2VarFontHeading: h2 ? getComputedStyle(h2).getPropertyValue('--font-heading') : null,
      h2VarFontBranley: h2 ? getComputedStyle(h2).getPropertyValue('--font-branley') : null,
    };
  });
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})();
