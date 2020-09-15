<!--
 * @Description:
 * @Author: 仲灏<izhaong 164165005@qq.com>
 * @Date: 2020-09-15 18:14:11
 * @LastEditors: 仲灏<izhaong 164165005@qq.com>
 * @LastEditTime: 2020-09-15 18:49:28
-->
<template>
  <table>
    <thead>
      <tr>
        <th v-for="(col, index) in columns" :key="index">{{col.label}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in data" :key="index">
        <td v-for="(col, idx) in columns" :key="idx">
          <template v-if="'render' in col">
            <render :column="col" :row="row" :index="index" :render="col.render" />
          </template>
          <template v-else>
            {{row[col.prop]}}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Render from './reder'
export default {
  name: 'zhTable',
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  components: { Render }

}
</script>

<style socped>
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #e9e9e9;
}
table th {
  background: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
  white-space: nowrap;
}
table td,
table th {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}
</style>
