- ### 安装组件库
`npm install xiaozhong-ui -S`
- ### 导入组件库
`import xiaozhongUI from 'xiaozhong-ui'`
- ### 注册组件库
`Vue.use(xiaozhongUI)`

## 组件
### 图标 zh-iconfont
**先在导入线上项目地址**
eg: `<link rel="stylesheet" href="//at.alicdn.com/t/font_1233314_umigplitpko.css">`

# API
## Icon 图标
#### 如何使用

`<zh-iconfont size="ios-checkmark" />`

#### props
属性		|	说明					|	 类型			|	默认值
---		|	---					|	---				|	---
icon		|	图标的名称		|	String			|
size		|	图标的大小		|	Number		|	18
color	|	图标的颜色		|	String			|	#000

## slider 轮播图
#### 如何使用
<zh-slider :items="items"/>
#### props
属性 | 说明 | 类型 | 默认值 | 实例
|:--:|:---:|:---:|:-----:|:---:|
items | 轮播图的链接与图片 | Array | | 如下
swiperOption | 轮播图样式类型 | Object | { autoplay: true, loop: true, pagination: { el: ".swiper-pagination" }, notNextTick: false } | 如下

#### 实例
```
items: [
        {
          href: 'home',
          src:
            '****.png?width=750&height=320'
        },
        {
          href: 'home',
          src:
            '****.png?width=750&height=320'
        }
      ]
```     
``` 
swiperOption: {
          direction: 'vertical',
          slidesPerView: 1,
          spaceBetween: 30,
          mousewheel: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
```
更多实例: https://surmon-china.github.io/vue-awesome-swiper/

## input 输入框
#### 如何使用
`<zh-input width="100%" alt="请输入密码" placeholder="密码" type="password" />`
#### props
属性           |	说明					|	 类型		      	|	默认值
---           |	---					  |	---			      	|	---
alt           |	输入框的占位符	|	String	    		|  '请输入名称'
placeholder   |	输入框的名称		|	String	      	|	'名称'
type          |	输入框的类型		|	String		    	|	'text'
width         |	输入框的宽度		|	String/Number		|	'100%'
color         |	输入框内文字颜色 |	String	     	|	'100%'
focus-color   |	输入框填写时文字颜色|	String    		|	'100%'


## button 按钮
#### 如何使用
`    <zh-button
      type="primary"
      width="80px"
      height="auto"
      padding="8px 20px"
      fontSize="auto"
      fontColor="#fff"
    >button</zh-button>`
#### props
属性          |	说明					|	 类型		      	|	默认值
---          |	---					 |	---			     	|	---
type         |	按钮的类型  	|	String	    		| 'primary'
width        |	按钮的宽度		|	String	      	|	'80px'
height       |	按钮的高度		|	String		    	|	'auto'
padding      |	按钮的内边距	|	String	      	|	'8px 20px'
fontSize     |	按钮文字大小  |	String	       	|	'auto'
fontColor    |	按钮填文字颜色 |	String    		|	'#fff'