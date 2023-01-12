<template>
  <div class="progress-container">
    <h2 class="is-color-c7 is-text">{{ name }}</h2>
    <div class="progress-content">
      <progress class="progress is-primary m-0" :value="`${timer}`" max="100">
        {{ timer }}%
      </progress>
      <div class="percent is-color-c7">{{ timer }}%</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  color: {
    type: String,
    default: "primary",
  },
  name: {
    type: String,
    default: "",
  },
});
onMounted(() => {
  runTimer(props.value);
});

const timer = ref(0);
const runTimer = (time: number) => {
  timer.value = 0;
  const timerInterval = setInterval(() => {
    timer.value++;
    if (timer.value == time) {
      clearInterval(timerInterval);
    }
  }, 20);
};
</script>
<style lang="scss" scoped>
.progress-container {
  padding: 1vw;
}
.progress-content {
  display: grid;
  grid-template-columns: 70% 10%;
  align-items: center;
  gap: 5%;
}
.percent {
  font-size: 1vw;
}
.progress {
  height: 1vw;
}
@media screen and (max-width: 768px) {
  .progress {
    height: 1vh;
  }
  .percent {
    font-size: 3vw;
  }
  .progress-content {
    justify-content: space-between;
  }
}
</style>
