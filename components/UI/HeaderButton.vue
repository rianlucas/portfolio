<template>
  <div class="bg-defaultBgColor">
    <NuxtLink
        class="py-4 px-8 bg-defaultBgColor text-defaultFontColor border-r border-defaultBorderColor flex items-center  hover:text-white hover:border-b hover:border-b-[#FEA55F]"
        to={{ link }}>
        {{ name }}
      </NuxtLink>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  name: String,
  link: String
})

</script>

<style>

</style>