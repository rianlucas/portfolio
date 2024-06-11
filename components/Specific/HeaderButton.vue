<template>
    <div class="bg-defaultBgColor">
        <NuxtLink
            id="nav-link"
            @click="toggleFocus"
            :class="[
                'bg-defaultBgColor text-defaultFontColor border-r border-defaultBorderColor border-b-2 border-b-transparent flex items-center hover:text-white hover:border-b-2 hover:border-b-orangeAcentColor hover:transition-all',
                paddingClass,
            ]"
            :to="link"
        >
            {{ name }}
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

function toggleFocus(event) {
    document.querySelectorAll("#nav-link").forEach((link) => {
        link.classList.remove("border-b-orangeAcentColor");
        link.classList.remove("text-white");
        link.classList.add("border-b-transparent");
    });

    event.target.classList.remove("border-b-transparent");
    event.target.classList.add("border-b-orangeAcentColor");
    event.target.classList.add("text-white");
}

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
