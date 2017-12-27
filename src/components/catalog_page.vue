<template>
    <div class="catalog-bg">
        <div class="catalog-main">
            <h1 class="catalog-title">记昨日书</h1>
            <p class="catalog-count">1</p>
            <hr>
            <div class="catalog-page" v-for="t in $store.state.catalog" v-on:click="readArticle(t._id)">
                <div>
                <h3>
                    {{ t.title }}
                </h3>
                <p>2017-10-21</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import store from '@/store/store';
export default {
    created() {
        axios
            .get('http://127.0.0.1:3000/pages')
            .then(
                function(response) {
                    if (response.data.code == 0) {
                        this.$store.state.catalog = response.data.data;
                    }
                }.bind(this)
            )
            .catch(function(error) {
                console.log(error);
            });
    },
    methods: {
        readArticle (articleId) {
            // alert(articleId);
            this.$store.state.swpier.slideTo(2, 1000, false);
        }
    },
    store
};
</script>

<style>
.catalog-bg {
  height: 100vh;
  background: url(../assets/background.jpg);
  background-size: 100% 100%;
}
.catalog-main {
  border-top: 1px solid rgba(0, 0, 0, 0.6);
  height: 100vh;
  background-color: white;
  margin: 0 auto;
  opacity: 0.8;
  overflow: scroll;
}
.catalog-count {
  height: 33px;
  width: 100px;
  border: 1px solid #27ae60;
  text-align: center;
  line-height: 33px;
  color: #27ae60;
  margin: 10px auto;
  border-radius: 1.5em;
}
.catalog-title {
  padding: 20px 0;
  font-size: 48px;
  line-height: 48px;
  height: 48px;
  font-weight: 200;
  text-align: center;
}
.catalog-page {
  display:block;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.6);
  height: 200px;
  width: 300px;
  margin-left: 50px;
  margin-bottom: 50px;
  float: left;
  cursor: pointer;
}
.catalog-page h3 {
    text-align: center;
    margin-top:50px;
    font-weight: 400;
    font-size: 16px;
    height: 100px;
    line-height: 100px;
    background-color: beige;
}
.catalog-page p{
    height: 50px;
    font-size: 12px;
    font-weight: 100;
    line-height: 50px;
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.6);
    text-align: right;
}
</style>
