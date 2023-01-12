<template>
  <div class="splash-container">
    <img src="../../src/assets/logo.svg" alt="" />
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
//create interval that disabled the splash screen
const emit = defineEmits(["disabledSplash"]);
const interval = setInterval(() => {
  clearInterval(interval);
  emit("disabledSplash", false);
}, 3000);
</script>

<style lang="scss" scoped>
.splash-container {
  width: 100vw;
  height: 100vh;
  background-color: var(--app-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: splash-animation 3s ease-in backwards;
}
img {
  width: 10vw;
  animation: scale-image 3s ease-in backwards;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

@keyframes splash-animation {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
@keyframes scale-image {
  0% {
    transform: scale(1);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: scale(1.25);
  }
}
</style>
