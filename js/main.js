chrome.extension.onMessage.addListener(req => {
  let result = `[sanko href="${req.url}" title="${req.title}" site="" target="_blank"]`
  execCopy(result)
})

// https://github.com/spadeloves/markdown_link_maker/blob/master/js/main.js
function execCopy(string) {
  var temp = document.createElement('div')
  temp.appendChild(document.createElement('pre')).textContent = string
  document.body.appendChild(temp)
  document.getSelection().selectAllChildren(temp)
  var result = document.execCommand('copy')
  document.body.removeChild(temp)
  return result
}
