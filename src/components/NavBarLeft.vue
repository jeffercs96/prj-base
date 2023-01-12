<template>
  <nav class="navbarleft-container">
    <div class="logo"></div>
    <div class="tabs-content">
      <span
        v-for="tab in tabs"
        :key="tab.id"
        class="is-pointer"
        @click="updateTab(tab.id)"
      >
        <i
          class=""
          :class="
            tab.id === actualTab
              ? `${tab.icon} is-color-c2`
              : `${tab.icon} is-color-c7`
          "
        ></i>
      </span>
    </div>
    <div class="contact_me">
      <span class="contact_icon" @click="openMenuSocialNetworks">
        <i
          id="contact_me"
          :class="activeNetworks ? 'is-color-c3' : 'is-color-c4'"
          class="icon-contact is-pointer"
        ></i>
      </span>
      <Transition name="bounce">
        <div
          v-show="activeNetworks"
          :is-active="activeNetworks"
          class="contact_option"
        >
          <a
            v-for="network in networks"
            :key="network.id"
            target="_blank"
            class="is-pointer"
            :href="network.link"
          >
            <i :id="network.name" :class="network.icon"></i>
          </a>
        </div>
      </Transition>
    </div>
  </nav>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const actualTab = ref(1);
const emit = defineEmits(["updateTab"]);
const tabs = [
  {
    id: 1,
    name: "Home",
    icon: "icon-home",
  },
  {
    id: 2,
    name: "About",
    icon: "icon-user",
  },
  {
    id: 3,
    name: "Skills",
    icon: "icon-code",
  },
  {
    id: 4,
    name: "Portfolio",
    icon: "icon-portfolio",
  },
];
const networks = [
  {
    id: 1,
    name: "Whatsapp",
    icon: "icon-Whatsapp",
    link: "https://wa.me/+593979145466",
  },
  {
    id: 2,
    name: "Telegram",
    icon: "icon-Telegram",
    link: "https://t.me/jeff_ssl",
  },
  {
    id: 3,
    name: "GitHub",
    icon: "icon-GitHub",
    link: "https://github.com/jeffercs96",
  },
  {
    id: 4,
    name: "Facebook",
    icon: "icon-Facebook",
    link: "https://www.facebook.com/profile.php?id=100008343277726",
  },
  {
    id: 4,
    name: "Instagram",
    icon: "icon-Instagram",
    link: "https://www.instagram.com/jeff.ssl/",
  },
];
const activeNetworks = ref(false);
const updateTab = (id: number) => {
  actualTab.value = id;
  emit("updateTab", id);
};

// activeNetworks.value ? window.addEventListener("click", clickOutside) : null;
const openMenuSocialNetworks = () => {
  activeNetworks.value = !activeNetworks.value;
  if (activeNetworks.value) {
    window.addEventListener("click", clickOutside);
  }
};
const clickOutside = (e: MouseEvent) => {
  if (e.target instanceof HTMLElement) {
    if (
      e.target.id == "contact_me" ||
      e.target.id == "Whatsapp" ||
      e.target.id == "Telegram" ||
      e.target.id == "GitHub" ||
      e.target.id == "Facebook" ||
      e.target.id == "Instagram"
    ) {
      return;
    } else {
      activeNetworks.value = false;
      window.removeEventListener("click", clickOutside);
    }
  }
};
</script>
<style lang="scss" scoped>
.navbarleft-container {
  padding: 1vw;
  width: auto;
  height: 100vh;
  background-color: var(--app-c1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    transform: scale(1);
    //   width: 5.556vw;
    //   height: 2.778vw;
  }
}
span {
  display: flex;
  i {
    font-size: 1.5vw;
  }
}
.tabs-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5vw;
  span:hover {
    i {
      transform: scale(1.25);
    }
  }
}
.svg-color {
  fill: var(--app-c2);
}
.contact_me {
  position: relative;
}

.contact_icon {
  i {
    font-size: 2vw;
  }
  // animation: scale 3s infinite;
}
// .contact_icon:hover {
//   animation: none;
//   i {
//     color: var(--app-c3) !important;
//     transform: scale(1.25);
//   }
// }
.contact_option {
  background: var(--app-c5);
  border-radius: 5vw;
  padding: 0.5vw;
  position: absolute;
  display: flex;
  top: -1vw;
  left: 4vw;
  z-index: 100;
  // transform: translate(4vw, -3vw);
}
.contact_option > a {
  i {
    font-size: 3vw;
    color: var(--app-c1);
  }
}
.icon-Whatsapp {
  color: #25d366 !important;
}
.icon-Telegram {
  color: #0088cc !important;
}
.icon-GitHub {
  color: #000 !important;
}
.icon-Facebook {
  color: #3b5998 !important;
}
.icon-Instagram {
  color: #e4405f !important;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  // 50% {
  //   transform: scale(1.25);
  // }
  100% {
    transform: scale(1);
  }
}

@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

@media screen and (max-width: 768px) {
  .navbarleft-container {
    padding: 1vh;
    height: auto;
    width: 100vw;
    flex-direction: row;
    align-items: center;
  }
  .logo {
    svg {
      display: none;
      //   transform: scale(0.5);
    }
  }
  .tabs-content {
    flex-direction: row;
  }
  span {
    i {
      font-size: 2vh;
    }
  }
  .contact_icon {
    i {
      font-size: 2vh;
    }
  }
  .contact_option {
    position: absolute;
    display: flex;
    flex-direction: column-reverse;
    // transform: translate(-1vh, -20vh);
    top: -18vh;
    left: -0.8vh;
  }
  .contact_option > a {
    i {
      font-size: 3vh;
      color: var(--app-c1);
    }
  }
}
</style>
