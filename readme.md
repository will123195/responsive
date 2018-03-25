# responsive

Simple window size checkpoints in the browser.

## Install

```
npm i -S responsive
```

## Usage

```js
import responsive from 'responsive'

const opts = {
  checkpoints: {
    small: {
      width: [0, 400]
    },
    big: {
      width: [401, null]
    }
  }
}
responsive(opts, data => {
  // This callback fires immediately and whenever the window size changes
  console.log(data)
  // {
  //   width: 824,
  //   height: 977,
  //   square: false,
  //   portrait: true,
  //   landscape: false,
  //   matches: ['big']
  // }
})
```
