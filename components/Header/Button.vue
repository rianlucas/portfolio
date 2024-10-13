<template>
  <div class="bg-defaultBgColor cursor-pointer">
      <NuxtLink
          id="nav-link"
          @click="setActiveLink(name)"
          class="bg-defaultBgColor text-defaultFontColor border-r border-defaultBorderColor border-b-2 flex items-center hover:text-white hover:border-b-2 hover:border-b-orangeAcentColor hover:transition-all"
          :class="[
            paddingClass,
            isActiveLink(name) ? 'border-b-orangeAcentColor text-white' : 'border-b-transparent'
            ]"
          :to="link"
      >
          {{ name }}
      </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { activeLink, setActiveLink, isActiveLink } from '../../isActiveLink';  // Importa o estado global e funções


const props = defineProps({
  name: {
      type: String,
      required: true,
  },
  link: {
      type: String,
      required: true,
  },
  size: {
      type: String,
      default: "medium",
      validator: (value: string) =>
          ["small", "medium", "large"].includes(value),
  },
});

const paddingClass = computed(() => {
  switch (props.size) {
      case "small":
          return "py-2 px-4 max-w-[4rem]";
      case "large":
          return "py-[0.71rem] px-32";
      default:
          return "py-[0.71rem] px-8 max-w-[11rem]";
  }
});
</script>

<style>
</style>
