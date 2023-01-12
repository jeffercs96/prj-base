<template>
  <div class="template-slide-container">
    <div class="content">
      <div class="col col-1">
        <slot name="col-1"></slot>
      </div>
      <div class="col col-2">
        <slot name="col-2"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.template-slide-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10vw;
}
.content {
  display: flex;
  align-items: center;
  gap: 5vw;
}
.col-1 {
  max-width: 45vw;
  width: 100%;
}
.col-2 {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .template-slide-container {
    display: inline-block;
    padding: 10vh;
  }
  .content {
    flex-direction: column-reverse;
  }
  .col-1 {
    max-width: none;
  }
}
</style>
