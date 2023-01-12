<template>
  <splash v-if="splashActive" @disabled-splash="disabledSplash" />
  <div v-else class="index-container">
    <div class="nav">
      <NavBarLeft @updateTab="updateTab" />
    </div>
    <div class="content">
      <o-carousel
        ref="carousel"
        :arrow="false"
        indicatorInside
        class="o-carousel"
        @update:modelValue="actualTab"
      >
        <o-carousel-item class="o-carousel-item">
          <div class="content-scroll">
            <slideHome />
          </div>
        </o-carousel-item>
        <o-carousel-item class="o-carousel-item">
          <div class="content-scroll">
            <slideAbout />
          </div>
        </o-carousel-item>
        <o-carousel-item class="o-carousel-item">
          <div class="content-scroll">
            <slideCode :focus="index == 2" />
          </div>
        </o-carousel-item>
        <o-carousel-item class="o-carousel-item">
          <slidePortfolio />
        </o-carousel-item>
      </o-carousel>
    </div>
  </div>
</template>
<script lang="ts" setup>
import NavBarLeft from "./NavBarLeft.vue";
import slideHome from "./home/slide1/slideHome.vue";
import slideAbout from "./home/slide2/slideAbout.vue";
import slideCode from "./home/slide3/slideCode.vue";
import slidePortfolio from "./home/slide4/slidePortfolio.vue";
import splash from "./splash.vue";
import { ref, onMounted } from "vue";

const carousel = ref();
const index = ref(0);
const splashActive = ref(true);
onMounted(() => {});
const updateTab = (id: number) => {
  carousel ? carousel.value.switchTo(id - 1) : null;
};
const actualTab = (event: number) => {
  index.value = event;
};
const disabledSplash = (e: boolean) => {
  splashActive.value = e;
};
</script>
<style lang="scss" scoped>
.o-carousel {
  width: 100%;
  height: 100%;
}
.o-carousel-item {
  width: 100%;
  height: 100%;
  position: relative;
}

.index-container {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.index-container {
  display: flex;
  justify-content: space-between;
}
.content {
  width: 100%;
  height: 100%;
}

// .nav {
//   position: absolute;
//   left: 0;
//   z-index: 100;
// }
@media screen and (max-width: 768px) {
  .content-scroll {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: scroll;
  }
  .index-container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
  }
  .content {
    width: 100%;
    height: 100%;
  }
  .nav {
    // position: absolute;
    // bottom: 0;
  }
}
</style>
