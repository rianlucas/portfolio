<template>
  <div>
    <NuxtLink :link="link" class='flex mx-3 items-center'>
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