import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default" | "home"
declare module "../../node_modules/.pnpm/nuxt@3.8.0_eslint@8.52.0_typescript@4.9.5_vite@2.9.0/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}