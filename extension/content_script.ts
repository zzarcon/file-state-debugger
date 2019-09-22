console.log('content_script', window.__streamCache__)

window.addEventListener('message', function(event) {
  // console.log('content_script.js got message:', event);
  // check event.type and event.data
});

const port = chrome.runtime.connect();

window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if (event.source != window)
    return;

  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    console.log("Content script received: " + event.data);
    // port.postMessage(event.data.text);
  }
}, false);