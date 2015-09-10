# responsive

Simple window size checkpoints in the browser.

## Install

```
npm install responsive
```

## Usage

```js
var responsive = require('responsive')

var opts = {
  checkpoints: {
    small: {
      width: [0, 400]
    },
    big: {
      width: [401, null]
    }
  }
}
responsive(opts, function () {
  console.log('The window size is:')
  console.log(this.width) // 1000
  console.log(this.height) // 480
  console.log(this.landscape) // true
  console.log(this.portrait) // false
  console.log(this.square) // false
  console.log(this.matches) // ['big']
})
```
