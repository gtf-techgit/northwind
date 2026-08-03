const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(String(err)));

  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForSelector("text=Know More");
  await page.screenshot({ path: "C:\\Users\\DELL\\AppData\\Local\\Temp\\claude\\c--Users-DELL-git-files-northwind\\2a15b452-dd48-4d24-a796-684fbcdad624\\scratchpad\\home.png", fullPage: false });

  console.log("ERRORS_FOUND:", errors.length);
  errors.forEach((e) => console.log("---\n" + e));

  await browser.close();
})();
