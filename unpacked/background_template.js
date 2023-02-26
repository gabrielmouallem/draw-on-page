chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        if (!document.getElementById("extension_root")) {
          const container = document.createElement("div");
          container.id = "extension_root";
          document.body.appendChild(container);

          ===> build here <===
        }
      },
    });
  }
});