<template>
  <div class="full-screen-height start__screen">
    <h1>Valoparty</h1>
    <VPButton :target="'/create'">Start</VPButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VPButton from '@/components/Button.vue';

export default defineComponent({
  components: {
    VPButton
  },
  setup () {
    

    return {}
  }
})
</script>

<style scoped>
.start__screen {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>