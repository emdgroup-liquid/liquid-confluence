import './liquid-confluence.css'
import '@emdgroup-liquid/liquid/dist/css/liquid.global.css'

const liquidPath =
  (document.head
    .querySelector<HTMLLinkElement>('link[rel="icon"]')
    ?.href.split('/NOCACHE/')[0] || '') +
  '/NOCACHE/1.0.0/_/download/resources/com.emdgroup.plugins.liquid.confluence.liquid-confluence:liquid-confluence-resources/out/liquid'
const assetPath = liquidPath + '/liquid'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.__LD_ASSET_PATH__ = assetPath

document.documentElement.classList.add('ld-theme-bubblegum')

import(liquidPath + '/loader/index.js').then((module) => {
  const { applyPolyfills, defineCustomElements } = module
  applyPolyfills()
  defineCustomElements()
})
