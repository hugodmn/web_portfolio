
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/hugo/Desktop/web_portfolio/node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "56d9723a-2304-4711-bfe3-b0ff3ddaea73"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
