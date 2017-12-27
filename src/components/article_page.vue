<template>
    <div class="markdown-body">
    </div>
</template>

<script>
import marked from 'marked';
import axios from 'axios';

export default {
    mounted() {
        this.getArticle('5a41fb48bcb7153f3e4ee77f');
    },
    methods: {
        getArticle(id) {
            marked.setOptions({
                renderer: new marked.Renderer(),
                gfm: true,
                tables: true,
                breaks: true,
                pedantic: true,
                sanitize: true,
                smartLists: true
            });
            axios
                .get(`http://127.0.0.1:3000/pages/${id}`)
                .then(
                    function(r) {
                        if (r.data.code === 0) {
                            this.$el.innerHTML = marked(r.data.data.page);
                        }
                    }.bind(this)
                )
                .catch(e => {
                    console.log(e);
                });
        }
    }
};
</script>

<style>
.markdown-body {
  /* height: 100%; */
  overflow: scroll;
}
</style>
