/*
 * @Description:
 * @Author: 仲灏<izhaong 164165005@qq.com>
 * @Date: 2020-09-15 18:14:11
 * @LastEditors: 仲灏<izhaong 164165005@qq.com>
 * @LastEditTime: 2020-09-15 18:18:18
 */
import zhTable from './src/zh-table'
// 为组件提供 install 安装方法，供按需引入
zhTable.install = function (Vue) {
  Vue.component(zhTable.name, zhTable)
}
// 默认导出组件
export default zhTable
