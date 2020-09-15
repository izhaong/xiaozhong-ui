<!-- src/views/table-render.vue -->
<template>
  <div>
    <zh-table :columns="columns" :data="data"></zh-table>
  </div>
</template>
<script>

export default {
  data () {
    return {
      columns: [
        {
          label: '姓名',
          prop: 'name',
          render: (createElement, { row, index }) => {
            if (this.editIndex === index) {
              return createElement('input', {
                domProps: {
                  value: row.name
                },
                on: {
                  input: (e) => {
                    this.editProps.name = e.target.value
                  }
                }
              })
            } else {
              return createElement('span', row.name)
            }
          }
        },
        {
          label: '年龄',
          prop: 'age',
          render: (createElement, { row, index }) => {
            if (this.editIndex === index) {
              return createElement('input', {
                domProps: {
                  value: row.age
                },
                on: {
                  input: (e) => {
                    this.editProps.age = e.target.value
                  }
                }
              })
            } else {
              return createElement('span', row.age)
            }
          }
        },
        {
          label: '出生日期',
          prop: 'birthday',
          render: (createElement, { row, column, index }) => {
            const data = new Date(parseInt(row.birthday))
            const year = data.getFullYear()
            const month = data.getMonth() + 1
            const day = data.getDate()
            const birthday = `${year}-${month}-${day}`
            // return createElement('span', birthday)

            if (this.editIndex === index) {
              return createElement('input', {
                domProps: {
                  value: birthday
                },
                on: {
                  input: (e) => {
                    this.editProps.birthday = e.target.value
                  }
                }
              })
            } else {
              return createElement('span', birthday)
            }
          }
        },
        {
          label: '地址',
          prop: 'address'
        },
        {
          label: '操作',
          render: (createElement, { row, index }) => {
            if (this.editIndex === index) {
              return [
                createElement('button', {
                  on: {
                    click: () => {
                      this.data[index] = this.editProps
                      this.editIndex = -1
                    }
                  }
                }, '保存'),
                createElement('button', {
                  on: {
                    click: () => {
                      this.editIndex = -1
                    }
                  }
                }, '取消')
              ]
            } else {
              return createElement('button', {
                on: {
                  click: () => {
                    this.editIndex = index
                    this.editProps = row
                  }
                }
              }, '修改')
            }
          }
        }
      ],
      data: [
        {
          name: '王小明',
          age: 18,
          birthday: '919526400000',
          address: '北京市朝阳区芍药居'
        },
        {
          name: '张小刚',
          age: 25,
          birthday: '696096000000',
          address: '北京市海淀区西二旗'
        },
        {
          name: '李小红',
          age: 30,
          birthday: '563472000000',
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '周小伟',
          age: 26,
          birthday: '687024000000',
          address: '深圳市南山区深南大道'
        }
      ],
      editProps: {
        name: '',
        age: '',
        birthday: '',
        address: ''
      },
      editIndex: -1
    }
  }
}
</script>
