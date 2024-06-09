<template>
  <div class="bg-defaultBgColor">
    <NuxtLink
      :class="[
        'bg-defaultBgColor text-defaultFontColor border-r border-defaultBorderColor border-b-2 border-b-transparent flex items-center hover:text-white hover:border-b-2 hover:border-b-orangeAcentColor hover:transition-all',
        paddingClass
      ]"
      :to="link"
    >
      <span>{{ name }}</span>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value: string) => ['small', 'medium', 'large'].includes(value)
  }
});

const sizeClass = computed(() => {
  switch (props.size) {
    case 'small':
      return 'text-sm';
    case 'large':
      return 'text-lg';
    default:
      return 'text-base';
  }
});

const paddingClass = computed(() => {
  switch (props.size) {
    case 'small':
      return 'py-2 px-4';
    case 'large':
      return 'py-[0.71rem] px-32';
    default:
      return 'py-[0.71rem] px-8';
  }
});
</script>

<style>
/* Adicione qualquer estilo adicional aqui */
</style>
