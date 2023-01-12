<template>
  <TemplateSlide>
    <template #col-1>
      <h1 class="is-title is-color-c7">
        Hi !, <br />
        I’m <br />
        Jefferson Sandoval, Software Engineer.
      </h1>

      <p class="is-color-c5 is-text">
        Fron End Developer | Web Developer | Freelance Web
      </p>
    </template>
    <template #col-2>
      <img
        src="../../../assets/jeff_Foto.svg"
        alt="Jefferson Sandoval - Software Engineer"
      />
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
p {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 1px solid var(--app-c2) !important; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  // letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: var(--app-c2);
  }
}
</style>
