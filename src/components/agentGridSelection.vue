<template>
  <div class="agent__grid" v-if="selectedPlayer">
    <div v-for="agent in Agents" class="grid__item">
      <input type="checkbox" :id="agent.name" :value="agent" v-model="selectedPlayer.notAvailable">
      <label :for="agent.name">
        <img :src="`/agents/${agent.cleanName ?? agent.name}_icon.webp`" :alt="agent.name">
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Agents } from '@/types/agents';
import { useTeamsStore } from '@/stores/teams';
import { storeToRefs } from 'pinia';


export default defineComponent({
  setup () {
    const teamStore = useTeamsStore()
    const {selectedPlayer} = storeToRefs(teamStore)

    return {Agents, selectedPlayer}
  }
})
</script>

<style scoped>
.agent__grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 1rem;
}

.grid__item {
  display: flex;
  justify-content: center;
}

.grid__item img {
  max-width: 5rem;
  aspect-ratio: 1/1;
  transition: opacity .1s ease-in-out
}

.grid__item input[type="checkbox"] {
  appearance:unset;
}

.grid__item input[type="checkbox"]:checked + label img {
  opacity: .5;
}
</style>