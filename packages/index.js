/*
 * @Description:
 * @Author: 仲灏<izhaong 164165005@qq.com>
 * @Date: 2020-09-15 17:35:11
 * @LastEditors: 仲灏<izhaong 164165005@qq.com>
 * @LastEditTime: 2020-09-15 18:24:14
 */
// 导入组件
import colorPicker from './color-picker'
import zhIconfont from './zh-iconfont'
import zhSlider from './zh-slider'
import zhInput from './zh-input'
import zhButton from './zh-button'
import zhBgi3D from './zh-bgi-3D'
import zhTable from './zh-table'
// import './style/common.css'

// 存储组件列表
const components = [
  colorPicker,
  zhIconfont,
  zhButton,
  zhSlider,
  zhInput,
  zhBgi3D,
  zhTable
]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ...components
}
