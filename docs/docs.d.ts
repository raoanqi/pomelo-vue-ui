/**
 * 声明docs中的.vue文件，供ts进行识别
 **/
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
