if window?
  `global = window`
if exports?
  `global = exports`

global.requestAnimationFrame ||=
  global.webkitRequestAnimationFrame ||
  global.mozRequestAnimationFrame    ||
  global.oRequestAnimationFrame      ||
  global.msRequestAnimationFrame     ||
  (callback, element) ->
    setTimeout( ->
      callback(+new Date()) 1000 / 60)
