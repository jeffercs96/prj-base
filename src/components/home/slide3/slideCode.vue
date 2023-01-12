<template>
  <TemplateSlide>
    <template #col-1>
      <h1 class="is-title is-color-c7">Technologies</h1>

      <div v-if="focus" class="content-skills">
        <ProgressBar
          v-for="tech in technologies"
          :key="tech.id"
          :value="tech.value"
          :name="tech.name"
        />
      </div>
    </template>
    <template #col-2>
      <img src="../../../assets/skills.svg" alt="" />
    </template>
  </TemplateSlide>
</template>
<script lang="ts" setup>
import TemplateSlide from "../TemplateSlide.vue";
import ProgressBar from "./progressBar.vue";

defineProps({
  focus: {
    type: Boolean,
    default: false,
  },
});

const technologies = [
  {
    id: 1,
    name: "JavaScript",
    value: 75,
  },
  {
    id: 2,
    name: "TypeScript",
    value: 60,
  },
  {
    id: 3,
    name: "NodeJS",
    value: 50,
  },
  {
    id: 4,
    name: "DB SQL | NoSQL",
    value: 68,
  },
  {
    id: 5,
    name: "VueJS",
    value: 80,
  },
  {
    id: 6,
    name: "ReactJS",
    value: 70,
  },
  {
    id: 7,
    name: "HTML | CSS | SASS",
    value: 90,
  },
];
</script>
<style lang="scss" scoped>
img {
  width: 50vw;
}
p::after {
  content: "";
}
.content-skills {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5%;
}
</style>
