<template>
    <RouterLink v-if="mode == 'link'" class="btn" :class="type" :to="target"><slot /></RouterLink>
    <button v-if="mode == 'button'" class="btn" :class="type" @click="$emit('click')" ><slot/></button>
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
       },
       mode: {
        type: String,
        required: false,
        default: "link"
       }
    },
    setup () {

        return {}
    }
})
</script>

<style scoped>
button {
    all: unset;
    cursor: pointer;
}
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