/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c7b0956eb6096c1161b3a6a2a2a87e57"
  },
  {
    "url": "assets/css/17.styles.0ae36a89.css",
    "revision": "0192e7fdb597d3d9d982755f7ce435fb"
  },
  {
    "url": "assets/css/18.styles.c273c57b.css",
    "revision": "d3bf9cadaa2e2f83084f3e140eb51d99"
  },
  {
    "url": "assets/css/19.styles.baccf164.css",
    "revision": "202f1a3c1aacf091364f0c1aed803bd1"
  },
  {
    "url": "assets/css/22.styles.31bb7c90.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/23.styles.2c0a4484.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.43f931c3.css",
    "revision": "f51ca94ce656e647d958593b31b4da2c"
  },
  {
    "url": "assets/img/containers.87c74b32.svg",
    "revision": "87c74b32b6a8055918a9f6954a302f97"
  },
  {
    "url": "assets/img/placeholder.aa6f19b8.svg",
    "revision": "aa6f19b8165d81a94b0bb6ac14ea86e4"
  },
  {
    "url": "assets/img/responsive-typography.edb11b36.svg",
    "revision": "edb11b36d4ddfe7a04a4917ef95ce13f"
  },
  {
    "url": "assets/img/search.0781e11c.svg",
    "revision": "0781e11cc265635f26ea60cd1b8e0962"
  },
  {
    "url": "assets/js/0.f57d0910.js",
    "revision": "33497cbe1f9cc80fc3d11ffc6eaee31c"
  },
  {
    "url": "assets/js/1.ba8099ed.js",
    "revision": "41e9ecfeda6ef5200b95a9fa7064556d"
  },
  {
    "url": "assets/js/10.b5b638d3.js",
    "revision": "49eeb3565b28741239252ba90fabf674"
  },
  {
    "url": "assets/js/11.4b11fe80.js",
    "revision": "d512b8ca1684eea5639bbb1b601e84aa"
  },
  {
    "url": "assets/js/12.d3e7abd4.js",
    "revision": "ac12f537844505ed77ae315c88aca178"
  },
  {
    "url": "assets/js/13.69cd3806.js",
    "revision": "59258e8ed9c02d426fb6914ab5b7d70a"
  },
  {
    "url": "assets/js/14.1889e3dd.js",
    "revision": "ba9ed7feee993a936d898592c3ea1d32"
  },
  {
    "url": "assets/js/15.1db41459.js",
    "revision": "f141a4a36d7443cfca52e6df003bb26c"
  },
  {
    "url": "assets/js/16.878e01ae.js",
    "revision": "ef45904a12674374627085222f06b321"
  },
  {
    "url": "assets/js/17.0ae36a89.js",
    "revision": "b0de26571eb76cd7c856a62ca5b10499"
  },
  {
    "url": "assets/js/18.c273c57b.js",
    "revision": "6383fd790c79e94f9bf908642af636e4"
  },
  {
    "url": "assets/js/19.baccf164.js",
    "revision": "7841ab5273cdb8463492408be4ffb7ee"
  },
  {
    "url": "assets/js/2.58d0c525.js",
    "revision": "9ddbd71b6ce91e41159991062d61ff04"
  },
  {
    "url": "assets/js/20.2efe3345.js",
    "revision": "d3e0bb81ab6d925bfb080241b924db0c"
  },
  {
    "url": "assets/js/21.70f47b07.js",
    "revision": "284edfdadf2dcfc91bb716eabb3743dd"
  },
  {
    "url": "assets/js/22.31bb7c90.js",
    "revision": "51e2bdd6677b114a97ba523fbf0c0514"
  },
  {
    "url": "assets/js/23.2c0a4484.js",
    "revision": "c187390e400415a715a477fc184e84cf"
  },
  {
    "url": "assets/js/3.17bfcd66.js",
    "revision": "19b61d3cd1284f05cd2ecadf378dcd12"
  },
  {
    "url": "assets/js/4.f9703d4d.js",
    "revision": "48aa1d9043140eedd3b1d5da573fbe3c"
  },
  {
    "url": "assets/js/5.2ef99f19.js",
    "revision": "58c25c220f2d6dafcec3ff8e1461786a"
  },
  {
    "url": "assets/js/6.fed9908c.js",
    "revision": "ebaa51cfbc8d915ecab769d435bdc113"
  },
  {
    "url": "assets/js/7.59ff3788.js",
    "revision": "01baf383ef3751f2bf6ba85dacda4200"
  },
  {
    "url": "assets/js/8.22b421bc.js",
    "revision": "c7221879c36caaaa3eb7cff16a7f57a4"
  },
  {
    "url": "assets/js/9.e8b47a66.js",
    "revision": "85dce83a0195e1f950ddcb48c78893e8"
  },
  {
    "url": "assets/js/app.43f931c3.js",
    "revision": "4ed811f1e8c12e3171a47d1cf7fab444"
  },
  {
    "url": "guide/buttons.html",
    "revision": "51b6ad8da048d7f0f629f74a627a3308"
  },
  {
    "url": "guide/code.html",
    "revision": "c69b4664c660993ea3c1a17336082f76"
  },
  {
    "url": "guide/forms-inputs.html",
    "revision": "ff7891d42328063922a3d8e1d92f1e4b"
  },
  {
    "url": "guide/index.html",
    "revision": "ac63ba1be2abec8d3bc00a5911fbc1ea"
  },
  {
    "url": "guide/layout.html",
    "revision": "fafd37e657234202242619bbdef45ae2"
  },
  {
    "url": "guide/media.html",
    "revision": "0f748fa92ed5ebac939859d9e4b0a800"
  },
  {
    "url": "guide/meters-progress.html",
    "revision": "d1e588646cb6c8fb1b188bd7aec4435f"
  },
  {
    "url": "guide/tables.html",
    "revision": "a8a5bdf4ce027b4de6c44db4cf4a924d"
  },
  {
    "url": "guide/theming.html",
    "revision": "bd0c3aa7ccc2e2e9b816f098e0e424c5"
  },
  {
    "url": "guide/typography.html",
    "revision": "837ac263bde05305c4e1cb1ee32dff8d"
  },
  {
    "url": "hiq-app-logo.svg",
    "revision": "c0936bb362f0e11ba8bc5cce5d2915f0"
  },
  {
    "url": "hiq-logo.svg",
    "revision": "1197b44b98d1c1d4ce44a746d7fd864c"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "e4758bb2c9dfc5513c001e46e3747ddc"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "526930e5bea2f74970ed8041a2208d6d"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "61a88dd55ef923c68ecf4e5b89f41739"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "75aed6709fe831b509ebd270940f8b24"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "67296238f310d71d170374a4cfbd5939"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "0889ebd78e961dac4d56995128cf7f1a"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "9fc0b9568ca2f647061663b0e20face4"
  },
  {
    "url": "index.html",
    "revision": "05533ca8de233e3631f1769cd62f913d"
  },
  {
    "url": "logo.png",
    "revision": "526930e5bea2f74970ed8041a2208d6d"
  },
  {
    "url": "reference/browser-bugs.html",
    "revision": "8ab02d59380b97cc5ed712d0f45b5edd"
  },
  {
    "url": "reference/index.html",
    "revision": "d0e73393576601ed25c8b95eb92bbb33"
  },
  {
    "url": "reference/utilities.html",
    "revision": "0f5916f6ee05b78ef8d8834bd11bd460"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
