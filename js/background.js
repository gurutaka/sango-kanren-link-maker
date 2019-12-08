chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.getSelected(tabData => {
    let data = { title: '', url: '' }
    data.title = tabData.title
    data.url = tabData.url
    chrome.tabs.sendMessage(tab.id, data)
  })
})
