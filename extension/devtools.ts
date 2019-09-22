chrome.devtools.panels.create('FileStateDebugger',
    "MyPanelIcon.png",
    "panel.html",
    function(panel) {
      console.log({panel})
      // code invoked on panel creation
    }
);

// document.querySelectorAll('*').length
// chrome.devtools.inspectedWindow.eval('window.__streamCache__', (result, isException) => {
//   console.log({result, isException})
// })
const tabId = chrome.devtools.inspectedWindow.tabId
console.log({tabId})
// const backgroundPageConnection = chrome.runtime.connect({
//   name: tabId.toString()
// });
const backgroundPageConnection = chrome.runtime.connect();

backgroundPageConnection.onMessage.addListener((message) => {
  // Handle responses from the background page, if any
  console.log('onMessage', message)
});

// Relay the tab ID to the background page
// chrome.runtime.sendMessage({
//   tabId: chrome.devtools.inspectedWindow.tabId,
//   scriptToInject: "content_script.js"
// });