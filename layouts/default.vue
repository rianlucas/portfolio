<template>
  <div class="bg-defaultBgColor font-mono min-h-screen">
    <header>
        <LayoutHeader/>
    </header>

    <main class="flex-grow mt-16">
        <slot />
    </main>

    <footer>
        <LayoutFooter/>
    </footer>

  </div>
</template>

<script lang="ts" setup>


</script>

<style>

</style>
