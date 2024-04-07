import type { App } from 'vue'
import VueSaplingTree from './tree.vue'

// 使用install方法，在app.use挂载
VueSaplingTree.install = (app: App) => {
  app.component(VueSaplingTree.__name as string, VueSaplingTree)
}
export default {
  install(app: App) {
    app.component('VueSaplingTree', VueSaplingTree)
  },
}
export { VueSaplingTree }
