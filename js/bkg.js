/**
 * created by orz@mad4a.me with pirated webstorm
 * at 12-12-13 下午10:36
 */


chrome.tabs.executeScript(null,
                          { file: "js/main.js" });

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.url.indexOf('renren') > -1) {
        chrome.pageAction.show(tabId);
    }
});

