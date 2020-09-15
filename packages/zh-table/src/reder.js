/*
 * @Description:
 * @Author: 仲灏<izhaong 164165005@qq.com>
 * @Date: 2020-09-15 18:29:48
 * @LastEditors: 仲灏<izhaong 164165005@qq.com>
 * @LastEditTime: 2020-09-15 18:40:54
 */
export default {
  functional: true,
  props: {
    row: Object,
    column: Object,
    index: Number,
    render: Function
  },
  render: function (createElement, context) {
    const params = {
      row: context.props.row,
      column: context.props.column,
      index: context.props.index
    }

    return context.props.render(createElement, params)
  }
}
