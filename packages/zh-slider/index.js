import zhSlider from './src/zh-slider'
// 为组件提供 install 安装方法，供按需引入
zhSlider.install = function (Vue) {
  Vue.component(zhSlider.name, zhSlider)
}
// 默认导出组件
export default zhSlider
