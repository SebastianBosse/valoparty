<template>
    <button class="add__player" name="Add Player"><span>+</span></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        return {}
    }
})
</script>

<style scoped>
.add__player {
    color: var(--primary-accent-color);
    border: 1px solid var(--primary-accent-color);
    border-radius: .4rem;
    aspect-ratio: 1/1;
    width: 2rem;
}
</style>