//
// opts.checkpoints <Object>
// opts.interval <integer>
//
var responsive = module.exports = function responsive (opts, cb) {
  if (!(this instanceof responsive)) {
    return new responsive(opts, cb)
  }
  var self = this
  opts = opts || {}
  cb = cb || function () {}
  var seconds = opts.interval || 50
  var interval = setInterval(function () {
    self.refresh(opts, cb)
  }, seconds)
}

responsive.prototype.refresh = function (opts, cb) {
  var self = this

  var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth

  var height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight

  if (width === self.width && height === self.height) {
    return
  }

  self.width = width
  self.height = height

  self.square = false
  self.portrait = false
  self.landscape = false
  if (width < height) {
    self.portrait = true
  } else if (width > height) {
    self.landscape = true
  } else {
    self.square = true
  }

  self.matches = []
  var checkpoints = opts.checkpoints || {}
  Object.keys(checkpoints).forEach(function (name) {
    var checkpoint = opts.checkpoints[name] || {}
    var numMatches = 0
    var dimensions = ['width', 'height']
    dimensions.forEach(function (dimension) {
      if (Array.isArray(checkpoint[dimension])) {
        var min = checkpoint[dimension][0] || 0
        var max = checkpoint[dimension][1] || Number.MAX_VALUE
        if (self[dimension] >= min && self[dimension] <= max) {
          numMatches++
        }
      }
    })
    if (numMatches === Object.keys(checkpoint).length) {
      self.matches.push(name)
    }
  })
  cb(self)

}
