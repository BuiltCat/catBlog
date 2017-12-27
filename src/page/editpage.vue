<template>
  <div>
      <textarea ref="wirteMarkDown" v-model="markDownValue">asa</textarea>
      <div ref="showMarkDown" class="markdown-body"></div>
  </div>
</template>

<script>
import marked from 'marked';
import '../assets/markdown.css';

export default {
    data () {
        return  {
            markDownValue: '欢迎使用markdown编辑器！'
        };
    },
    watch: {
        markDownValue: function (val) {
            this.showMarkDown(val);
        }
    },
    mounted () {
        this.showMarkDown(this.markDownValue);
    },
    methods: {
        showMarkDown(value) {
            const showMarkDownValue = marked(value);
            this.$refs.showMarkDown.innerHTML = showMarkDownValue;
        }
    }
};
</script>

<style>
    textarea{
        width: 49%;
        height: 98vh;
        font-size: 24px;
        resize: none;
    }
    .markdown-body{
        height: 98vh;
        width: 50%;
        /* background-color: aliceblue; */
        float: right;
    }
</style>
