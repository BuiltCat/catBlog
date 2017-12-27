<template>
  <ul class="ul-style">
        <li v-for="(n,i) in $store.state.nav" @click="toPageById(i)" class="li-style">
            {{ n.name }} 
        </li>
  </ul>
</template>

<script>
import store from '@/store/store';
export default {
    methods: {
        toPageById(id){
            this.$store.state.swpier.slideTo(id, 1000, false);
        }
    },
    store
};
</script>

<style>
    .ul-style{
        width: 500px;
        margin: 0 auto;
    }
    .li-style{
        display: inline-block;
        height: 38px;
        line-height: 38px;
        width: 98px;
        color: rgba(0,0,0,.6);
        text-align: center;
        border-top: 1px solid #fff;
        transition: 1s;
    }
    .li-style:hover {
        color: black;
        border-top: 1px solid #000;
    }
</style>
