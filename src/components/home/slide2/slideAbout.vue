<template>
  <TemplateSlide>
    <template #col-1>
      <h1 class="is-title is-color-c7">About Me</h1>
      <p class="is-color-c5 is-text">
        Web developer, hard-working and talented to create elegant solutions in
        the solutions in the shortest time possible. Passionate about software
        architecture and computing. Curious about the new trends that emerge in
        the world of web development. web.
      </p>
    </template>
    <template #col-2>
      <img src="../../../assets/about.svg" alt="" />
    </template>
  </TemplateSlide>
</template>
<script lang="ts" setup>
import TemplateSlide from "../TemplateSlide.vue";
</script>
<style lang="scss" scoped>
img {
  width: 50vw;
}
</style>
