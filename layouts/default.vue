<template>
  <div class="bg-defaultBgColor font-mono min-h-screen flex flex-col">
    <header>
        <Header/>
    </header>

    <main class=" flex flex-1 items-center justify-center flex-grow mt-16">
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
