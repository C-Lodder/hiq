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
    "revision": "d2852a621da6bdf349a9308ff298e4b1"
  },
  {
    "url": "assets/css/17.styles.743f05bf.css",
    "revision": "0192e7fdb597d3d9d982755f7ce435fb"
  },
  {
    "url": "assets/css/18.styles.36edede3.css",
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
    "url": "assets/css/styles.d3bbe0bb.css",
    "revision": "7018df03a04edf741b056c3685369d63"
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
    "url": "assets/img/responsive-typography.e5e8b558.svg",
    "revision": "e5e8b5583b5245ead1760525637c7b5c"
  },
  {
    "url": "assets/img/search.0781e11c.svg",
    "revision": "0781e11cc265635f26ea60cd1b8e0962"
  },
  {
    "url": "assets/js/0.68a2dd3a.js",
    "revision": "e85a9e02a9de8bfd870dc0170fe00ed3"
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
    "url": "assets/js/12.6176bc50.js",
    "revision": "06c19c90036f5da3355630ece20c6e8e"
  },
  {
    "url": "assets/js/13.388db7f8.js",
    "revision": "6ae04ae2c8ae8f1d5afc5623b9fced18"
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
    "url": "assets/js/16.f3742fdd.js",
    "revision": "866cc26dc84cf70e3de6d5ec96476a98"
  },
  {
    "url": "assets/js/17.743f05bf.js",
    "revision": "85bbb6dd6d62d60eb0322693755239c9"
  },
  {
    "url": "assets/js/18.36edede3.js",
    "revision": "36a2515791545b1562e3e1afeac28764"
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
    "url": "assets/js/20.26c3f86a.js",
    "revision": "969cef31c150bcf2a59f68090d947368"
  },
  {
    "url": "assets/js/21.ba47c20c.js",
    "revision": "7fcab8f3ac7a0eb528e1908f776e371c"
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
    "url": "assets/js/4.2d946af3.js",
    "revision": "5d711602b298b8d0bfdd7d961449d812"
  },
  {
    "url": "assets/js/5.58baee61.js",
    "revision": "f185436e33e0393fecc761f4f98740f0"
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
    "url": "assets/js/9.8f2db256.js",
    "revision": "91da9631d9be6772e3e3e84eb1ad7f19"
  },
  {
    "url": "assets/js/app.d3bbe0bb.js",
    "revision": "452fbda4fae8427d532b4c8cffd8fad5"
  },
  {
    "url": "guide/buttons.html",
    "revision": "b55deea4d0f266c8742671b1091e9710"
  },
  {
    "url": "guide/code.html",
    "revision": "41b0b9e89302a333deb0f057521d9e33"
  },
  {
    "url": "guide/forms-inputs.html",
    "revision": "c1eb92a650ba3bd7e66ef991a2fd3c53"
  },
  {
    "url": "guide/index.html",
    "revision": "873e61cfedfbe6f3390a56ca57d9c86f"
  },
  {
    "url": "guide/layout.html",
    "revision": "e9ad23e432278d7868a4dea05c78ee79"
  },
  {
    "url": "guide/media.html",
    "revision": "661f6deb673f63696e69991127ed3b3f"
  },
  {
    "url": "guide/meters-progress.html",
    "revision": "66674725f5ac6efb8e520222f1d2ef9f"
  },
  {
    "url": "guide/tables.html",
    "revision": "df377bbc079a8d14573b246d0004bdfc"
  },
  {
    "url": "guide/theming.html",
    "revision": "a617239ea30bd06f12997f146688af3d"
  },
  {
    "url": "guide/typography.html",
    "revision": "bfd70d464258aa59ba4bad3d4faca15d"
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
    "revision": "1bf459d28a3242e691fff0bf60b9dcc5"
  },
  {
    "url": "logo.png",
    "revision": "526930e5bea2f74970ed8041a2208d6d"
  },
  {
    "url": "reference/browser-bugs.html",
    "revision": "5739410731d584781927cd8510a87e3b"
  },
  {
    "url": "reference/index.html",
    "revision": "69d459839a7375873efde341875c3353"
  },
  {
    "url": "reference/utilities.html",
    "revision": "8f77e2f50a818fb2c652a7adf8bc9a83"
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
