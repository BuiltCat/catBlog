<template>
    <div class="bg-style">
        <h1 class="title animated bounce">呆猫の家</h1>
        <h2 class="subtitle">小院闲窗春色深 重帘未卷影沈沈</h2>
    </div>
</template>

<script>
export default {

};
</script>

<style>
@keyframes bgfilter {
    from { filter: blur(5px) };
    to { filter: none };
}

.bg-style {
  height: 100vh;
  background: url(../assets/background.jpg);
  background-size: 100% 100%;
  animation: 1s bgfilter;
}
.title {
  font-size: 48px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-style: normal;
  font-weight: 200;
  color: #fff;
  padding-top: 40vh;
}
.subtitle{
    font-size: 24px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-weight: 100;
}
.info {
  font-size: 2vh;
  line-height: 2vh;
  color: white;
  height: 2vh;
  text-align: center;
}
</style>
