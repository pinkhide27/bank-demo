/* eslint-disable eqeqeq */
export const initFontSize = function () {
  let _viewportWidth
  let lock = false
  let _htmlNode = document.getElementsByTagName('html')[0]
  let _scrollWidth = window.innerWidth || screen.availWidth || document.documentElement.scrollWidth
  let _scrollHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight == 0) ? screen.height : window.innerHeight : window.innerHeight

  let maxWidth = 750

  _viewportWidth = _scrollHeight > _scrollWidth ? _scrollWidth : _scrollHeight
  _htmlNode.style.fontSize = '100px'
  if (_viewportWidth < 150) {
    initFontSize()
    setTimeout(function () {
      !lock && initFontSize()
      lock = true
    }, 200)
  } else {
    _htmlNode.style.fontSize = _viewportWidth / maxWidth * 100 + 'px'
  }
}
