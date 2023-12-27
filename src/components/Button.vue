<template>
    <RouterLink class="btn" :class="type" :to="target"><slot /></RouterLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router';

export default defineComponent({
    props: {
       target: {
        type: String,
        required: true,
       },
       type: {
        type: String,
        required: false,
        default: "primary"
       }
    },
    setup () {

        return {}
    }
})
</script>

<style scoped>
.btn {
    padding: .5rem 1rem;
    border-radius: .4rem;
    text-decoration: none;
    font-weight: bold;
    transition: all .2s ease-in;
}
.primary {
    background-color: var(--primary-accent-color);
    color: var(--primary-font-color)
}

.inversed {
    background-color: var(--primary-font-color);
    color: var(--primary-accent-color);
}

.primary:hover {
    background-color: var(--primary-font-color);
    color: var(--primary-accent-color);
}

.inversed:hover {
    background-color: var(--primary-accent-color);
    color: var(--primary-font-color)
}
</style>