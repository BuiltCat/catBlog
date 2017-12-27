<template>
    <div>
        <cat-nav class="nav"></cat-nav> 
        <cat-banner class="banner"></cat-banner>
    </div>
</template>

<script>

import banner from '@/components/banner';
import nav from '@/components/top_nav';
export default {
    components:{
        'cat-banner': banner,
        'cat-nav': nav
    }
};
</script>

<style>
.nav{
    height: 5vh;
}
.banner{
    height: 95vh;
}
</style>
