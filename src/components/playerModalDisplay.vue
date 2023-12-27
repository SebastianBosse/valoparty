<template>
  <div>
    <h3>Player Modal</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue';

export default defineComponent({
  props: {
    playerData: {
      type: Object as PropType<any>,
      required: true
    }
  },
  setup (props) {
    

    return {}
  }
})
</script>

<style scoped>

</style>