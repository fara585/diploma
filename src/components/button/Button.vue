<script setup>
const props = defineProps({
    text: {
        typeof: String,
        default: "Text"
    }
})
</script>

<template>
    <button class="btn">
        {{ text }}
    </button>
</template>
