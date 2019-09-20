chrome.devtools.panels.create('FileStateDebugger',
    "MyPanelIcon.png",
    "panel.html",
    function(panel) {
      // code invoked on panel creation
    }
);

// document.querySelectorAll('*').length
chrome.devtools.inspectedWindow.eval('window.__streamCache__', (result, isException) => {
  console.log({result, isException})
})