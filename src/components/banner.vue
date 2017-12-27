<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
            <homepage></homepage>
        </swiper-slide>
        <swiper-slide>
            <catalog></catalog>
        </swiper-slide>
        <swiper-slide>
            <articlepage></articlepage>
        </swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
    </swiper>
</template>

<script>
import store from '@/store/store';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import homepage from '@/components/home_page';
import catalog from '@/components/catalog_page';
import articlepage from '@/components/article_page';

export default {
    name: 'carrousel',
    data() {
        return {
            swiperOption: {
                direction: 'vertical',
                height: window.innerHeight,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                // mousewheel: {
                //     releaseOnEdges: true
                // }
            }
        };
    },
    mounted() {
        this.$store.state.swpier =  this.$refs.mySwiper.swiper;
    },
    store,
    components: {
        swiper,
        swiperSlide,
        homepage,
        catalog,
        articlepage

    }
};
</script>

<style>

</style>
