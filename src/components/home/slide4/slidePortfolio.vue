<template>
  <div class="portfolio-container">
    <h1 class="is-title is-color-c7">Portfolio</h1>
    <div class="content">
      <div class="targets">
        <div class="enterprise-Target">
          <div v-for="enterprise in enterprises" class="target">
            <div class="logo">
              <img :src="`/images/${enterprise.image}`" :alt="enterprise.seo" />
            </div>
            <p class="name-enterprise">
              {{ enterprise.name }}
            </p>
            <p class="description-enterprise">
              {{ enterprise.detail }}
            </p>
            <a class="link-enterprise" :href="enterprise.link" target="_blank">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const enterprises = [
  {
    id: 1,
    name: "Kronio LLC",
    image: "logo-kronio.svg",
    detail:
      "Operamos para revolucionar el trabajo de varias empresas ayudándolos a sacar adelante la organización de su equipo. \n Somos un startup dedicado a crear soluciones tecnológicas, productivas e innovadoras para optimizar las operaciones y la gestión de Recursos Humanos de pequeñas y medianas empresas.",
    link: "https://kronio.io/",
    seo: "Kronio LLC",
  },
  {
    id: 2,
    name: "Rio Timings",
    image: "logo-cronometro-riotimming-1.png",
    detail:
      "es una empresa de cronometraje deportivo adaptada a las necesidades reales de los organizadores. Trabajamos en el mercado deportivo cronometrando desde 2018",
    link: "http://www.riotimings.com/",
    seo: "Rio Timings",
  },
];
</script>
<style lang="scss" scoped>
// img {
//   width: 100%;
//   height: 100%;
// }
.portfolio-container {
  padding: 2.5vw;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.content {
  height: 100%;
  width: 100%;
  position: relative;
}
.targets {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: scroll;
  // display: flex;
  // flex-wrap: wrap;
  .enterprise-Target {
    display: grid;
    // justify-content: center;
    grid-template-columns: repeat(auto-fit, 15vw);
    gap: 2.5vw;
  }
}

.target {
  background-color: var(--app-c1);
  padding: 1vw;
  border-radius: 1vw;
  .logo {
    height: 10vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .name-enterprise {
    font-size: 1.5vw;
    font-weight: 600;
    // margin-top: 1vw;
    // margin-bottom: 1vw;
    color: var(--app-c2);
  }
  .description-enterprise {
    font-size: 1vw;
    font-weight: 400;
    color: var(--app-c7);
    white-space: pre-line;
    max-height: 20vh;
    overflow: scroll;
  }
  .link-enterprise {
    font-size: 1vw;
    font-weight: 400;
    color: var(--app-c7);
    text-decoration: underline;
    text-decoration: none;
  }
}
.link-enterprise:hover {
  color: var(--app-c2);
}
@media screen and (max-width: 768px) {
  .portfolio-container {
    padding: 10vh 5vh;
  }

  .targets {
    .enterprise-Target {
      grid-template-columns: repeat(auto-fit, 15vh);
      gap: 2.5vh;
    }
  }
  .target {
    width: 15vh;
    padding: 1vh;
    border-radius: 1vh;
    .logo {
      height: 10vh;
    }
    .name-enterprise {
      font-size: 1.5vh;
    }
    .description-enterprise {
      font-size: 1vh;
      max-height: 10vh;
    }
    .link-enterprise {
      font-size: 1vh;
    }
  }
}
</style>
