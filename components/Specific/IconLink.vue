<template>
  <div class="border-x border-defaultBorderColor flex items-center">
    <NuxtLink 
      :to="link" 
      class='mx-3 items-center cursor-pointer'
      target="_blank"
      >
      <i :class="[
        'text-defaultFontColor hover:text-white text-4xl'
        , icon
        ]"></i>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps ({
  icon: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

</script>




<style>

</style>