const { JSDOM } = require("jsdom");

process.on("unhandledRejection", e => {
  throw e;
});

const [, , url] = process.argv;

const inDom = async window => {
  if (window.document.readyState === "loading")
    await new Promise(resolve =>
      window.document.addEventListener("DOMContentLoaded", resolve)
    );
  await window.certAssistMitPing();
};

(async () => {
  const dom = await JSDOM.fromURL(url, {
    resources: "usable",
    runScripts: "dangerously",
  });
  await dom.window.eval(`(${inDom})(window)`);
})();
