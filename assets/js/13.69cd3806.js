(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{185:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Start using HiQ by using npm to install the package or use the Github repository to get the latest development version.")]),t._v(" "),t._m(2),t._m(3),t._v(" "),a("p",[t._v("There are a few different ways you can include HiQ in your project.")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("Import the compiled minified version in your CSS:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),a("p",[t._v("You may also want to include the following optional plugins (also installed with HiQ):")]),t._v(" "),t._m(11),a("p",[t._v("For more information on using PostCSS read the "),a("a",{attrs:{href:"https://github.com/postcss/postcss#usage",target:"_blank",rel:"noopener noreferrer"}},[t._v("PostCSS documentation"),a("OutboundLink")],1),t._v(" usage section.")]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("Any of the HiQ CSS files can be imported independently. For example, if you want only the button styles, import the buttons file, after the basic utility files:")]),t._v(" "),t._m(13),a("p",[t._v("If you go with this approach, we recommend importing at least the base styles first and then including additional files after that. The base files will give you the typographic scale and basic structural styles. This is not required, however.")]),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[t._v("HiQ is built with custom properties and is easy to theme according to your own brand. Refer to the "),a("router-link",{attrs:{to:"/reference/"}},[t._v("custom property reference")]),t._v(", grab the properties you want to change, and include them in your project.")],1),t._v(" "),a("p",[t._v("These can be included anywhere, before or after HiQ!")]),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("For example, if you are creating a button variant, you could define the custom properties on a specific class:")]),t._v(" "),t._m(21),a("p",[t._v("You can also redefine custom properties within media queries:")]),t._v(" "),t._m(22),t._m(23),t._v(" "),a("p",[t._v("HiQ is designed in such a way that elements will use the most specific custom property that you have defined, and fallback to more generic properties, until finally falling back to a static value.")]),t._v(" "),a("p",[t._v("Take this button as an example:")]),t._v(" "),t._m(24),a("p",[t._v("This way, you have the freedom to be as specific with your custom property definitions as you want, without actually being required to define any custom properties at all.")]),t._v(" "),t._m(25),t._v(" "),a("p",[t._v("The HiQ distribution build will work in any browsers that support custom properties. See the "),a("a",{attrs:{href:"https://caniuse.com/#feat=css-variables",target:"_blank",rel:"noopener noreferrer"}},[t._v("Can I Use page"),a("OutboundLink")],1),t._v(" for the full browser listing.")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),a("p",[t._v("The compiled version of HiQ comes with vendor prefixes included. If you want greater control over which prefixes are used, you can import the HiQ source files and run them through your own PostCSS setup.")]),t._v(" "),a("p",[t._v("We recommend using "),a("a",{attrs:{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer"}},[t._v("autoprefixer"),a("OutboundLink")],1),t._v(" and defining the browsers you wish to support using "),a("a",{attrs:{href:"https://github.com/ai/browserslist",target:"_blank",rel:"noopener noreferrer"}},[t._v("browserslist"),a("OutboundLink")],1),t._v(".")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting Started")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("yarn add hiq "),s("span",{attrs:{class:"token comment"}},[this._v("# OR npm install hiq")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"basic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token atrule"}},[s("span",{attrs:{class:"token rule"}},[this._v("@import")]),this._v(" "),s("span",{attrs:{class:"token string"}},[this._v("'node_modules/hiq/dist/hiq.min.css'")]),s("span",{attrs:{class:"token punctuation"}},[this._v(";")])]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"advanced"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#advanced","aria-hidden":"true"}},[this._v("#")]),this._v(" Advanced")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Import the source version and process your CSS using PostCSS. This will give you access to the utility mixins that HiQ provides. Note that source files use the "),s("code",[this._v(".css")]),this._v(" file extension.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token atrule"}},[s("span",{attrs:{class:"token rule"}},[this._v("@import")]),this._v(" "),s("span",{attrs:{class:"token string"}},[this._v("'node_modules/hiq/css/hiq.css'")]),s("span",{attrs:{class:"token punctuation"}},[this._v(";")])]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To take full advantage of the PostCSS features in HiQ, you will need to configure your "),s("code",[this._v("postcss.config.js")]),this._v(" to include these plugins (already installed with HiQ):")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'postcss-mixins'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'postcss-custom-selectors'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'postcss-custom-media'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'postcss-easy-import'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'postcss-nested'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'autoprefixer'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'postcss-discard-comments'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"individual-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#individual-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Individual Files")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'node_modules/hiq/css/utility/*.css'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'node_modules/hiq/css/elements/buttons.css'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'node_modules/hiq/css/utility/*.css'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'node_modules/hiq/css/base/*.css'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'node_modules/hiq/css/typography/*.css'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\n"),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'node_modules/hiq/css/base/buttons.css'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"theming"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#theming","aria-hidden":"true"}},[this._v("#")]),this._v(" Theming")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'node_modules/hiq/dist/hiq.min.css'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\n"),a("span",{attrs:{class:"token selector"}},[t._v(":root")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("--hiq-button-border-color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lightgray"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("--hiq-button-background-color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lightgray"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("--hiq-button-text-color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" black"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Ideally, you would include your custom properties within a "),s("code",[this._v("variables.css")]),this._v(" file.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'node_modules/hiq/dist/hiq.min.css'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("/* your own custom property definitions */")]),t._v("\n"),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'variables.css'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If you want your custom property definitions to apply globally, you should define them on the root element using "),s("code",[this._v(":root")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To apply custom properties on specific elements or classes, you can define the local, scoped version of the custom properties (remove the "),s("code",[this._v("hiq-")]),this._v(" prefix).")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v("button.is-primary")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("--button-border-color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("--button-background-color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("--button-text-color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" white"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/* width-based media query */")]),t._v("\n"),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token property"}},[t._v("min-width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 800px"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("--hiq-container-horizontal-gap")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3rem"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("/* color scheme-based media query */")]),t._v("\n"),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token property"}},[t._v("prefers-color-scheme")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dark"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("--hiq-color-gray-1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("hsl")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("220, 10%, 98%"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"custom-property-fallback-chain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-property-fallback-chain","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom Property Fallback Chain")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v("button")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("background-color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/* use the scoped button background color variable, if deifned */")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("var")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--button-background-color"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n      "),a("span",{attrs:{class:"token comment"}},[t._v("/* otherwise use the global background color variable, if defined */")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("var")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--hiq-button-background-color,\n        "),a("span",{attrs:{class:"token comment"}},[t._v("/* otherwise use the primary color variable, if defined */")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("var")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--hiq-color-primary,\n          "),a("span",{attrs:{class:"token comment"}},[t._v("/* otherwise fallback to a static color value */")]),t._v("\n          "),a("span",{attrs:{class:"token function"}},[t._v("hsl")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("210, 100%, 50%"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"browser-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#browser-support","aria-hidden":"true"}},[this._v("#")]),this._v(" Browser Support")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),s("p",[this._v("Note that as of v3.0.0, HiQ does NOT work with any versions of Internet Explorer.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"vendor-prefixes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vendor-prefixes","aria-hidden":"true"}},[this._v("#")]),this._v(" Vendor Prefixes")])}],!1,null,null,null);s.default=e.exports}}]);