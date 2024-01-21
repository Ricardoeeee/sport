<template>
  <div id="bg">
    <Carousel autoplay loop :autoplay-speed="20000" arrow="never" dots="none">
      <CarouselItem v-for="item in values" :key="item.img">
        <div class="demo-carousel"><img :src="item.img" alt=""></div>
      </CarouselItem>

    </Carousel>
  </div>
</template>

<script>
export default {
  name: "LoginBackground",
  data() {
    return {
      values: [
        {img: require("@/assets/自然森林风景 河流 树林 倒映 雾 4k风景壁纸_彼岸图网.jpg")},
        {img: require("@/assets/海边 夕阳 黄昏 海滩 ɳ̲ 椰树风景4k壁纸_彼岸图网.jpg")},
        {img: require("@/assets/美丽的海洋风景 海边 绿色树林 蓝色海水 从上面往下看 windows10主题风景4k壁纸_彼岸图网.jpg")},
        {img: require("@/assets/阳光.jpg")},
        {img: require("@/assets/云雾山脉风景4k壁纸_彼岸图网.jpg")},
        {img: require("@/assets/绿色森林 沙丘 大海4k风景壁纸3840x2160_彼岸图网.jpg")},
        {img: require("@/assets/冬季外国乡村高山房子4k风景壁纸_彼岸图网.jpg")},
      ],
    }
  }
}
</script>

<style scoped>
#bg {
  position: absolute;
  width: 100%;
  height: auto;

}


img {
  display: block;
  width: 100%;
  height: 48vw;
  background-repeat: no-repeat;/*背景图片不重复*/
  background-size: cover;/*背景图片拉伸铺满*/
}
</style>