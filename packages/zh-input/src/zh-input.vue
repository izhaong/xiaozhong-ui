<template>
  <form>
    <input required :type="type" />
    <label :alt="alt" :placeholder="placeholder"></label>
  </form>
</template>

<script>
export default {
  name: 'zhInput',
  props: {
    placeholder: {
      type: String,
      default: '请输入名称'
    },
    alt: {
      type: String,
      default: '名称'
    },
    type: {
      type: String,
      default: 'text'
    },
    width: {
      default: 100
    }
  },
  computed: {
    inputWidth () {
      return this.width
    }
  }
}
</script>

<style socped>
input {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: -webkit-calc(3em + 2px);
  height: calc(3em + 2px);
  margin: 0 0 1em;
  padding: 1em;
  border: 1px solid #cccccc;
  border-radius: 1.5em;
  background: #fff;
  resize: none;
  outline: none;
}
input:focus {
  border-color: #00bafa;
}
input:focus + label[alt]:before {
  color: #00bafa;
}
input:focus + label[alt]:before,
input:valid + label[alt]:before {
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transform: translate(0, -1.5em) scale(0.9, 0.9);
  -ms-transform: translate(0, -1.5em) scale(0.9, 0.9);
  transform: translate(0, -1.5em) scale(0.9, 0.9);
}
input:invalid + label[alt][placeholder]:before {
  content: attr(placeholder);
}
input + label[alt] {
  display: block;
  pointer-events: none;
  line-height: 2.3em;
  margin-top: -webkit-calc(-3em - 2px);
  margin-top: calc(-3em - 2px);
  margin-bottom: -webkit-calc((3em - 1em) + 2px);
  margin-bottom: calc((3em - 1em) + 2px);
}
input + label[alt]:before {
  content: attr(alt);
  display: inline-block;
  margin: 0 -webkit-calc(1em + 2px);
  margin: 0 calc(1em + 2px);
  padding: 0 2px;
  color: #898989;
  white-space: nowrap;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#ffffff),
    to(#ffffff)
  );
  background-image: -webkit-linear-gradient(top, #ffffff, #ffffff);
  background-image: linear-gradient(to bottom, #ffffff, #ffffff);
  -webkit-background-size: 100% 5px;
  background-size: 100% 5px;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
