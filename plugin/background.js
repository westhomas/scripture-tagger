// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(
      null, {code:"var script=document.createElement('script');script.src='//edgecaselabs.com/chrome-extension-reftagger/1.0.3/reftagger.js';document.getElementsByTagName('head')[0].appendChild(script);"});
});

chrome.browserAction.setBadgeBackgroundColor({color:[0, 200, 0, 100]});