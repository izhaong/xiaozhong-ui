import zhInput from './src/zh-input'
// 为组件提供 install 安装方法，供按需引入
zhInput.install = function (Vue) {
  Vue.component(zhInput.name, zhInput)
}
// 默认导出组件
export default zhInput
