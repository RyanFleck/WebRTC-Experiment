[![Netlify Status](https://api.netlify.com/api/v1/badges/48309fc1-6166-416d-87c4-5f81281e0b03/deploy-status)](https://app.netlify.com/sites/rcf-webrtc-experiment/deploys)

![Videophone experiment.](public/videophone.png)

This is a testing ground for the latest in WebRTC. I'd like to create a
few decentralized applications, and WebRTC has the potential (through
projects like WebTorrent) to bring peer-to-peer tech to the masses.

### Resources:

1. [Google Codelabs: WebRTC](https://codelabs.developers.google.com/codelabs/webrtc-web)

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```



### Features:

* ES6 Support via [babel](https://babeljs.io/) (v7)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
