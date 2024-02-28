<template>
  <div v-if="selectedPlayer" class="agent__grid">
    <div v-for="(agents, role) in sortedAgents" >
      <h6>
        {{ role }}
      </h6>
      <div class="agent__row">
        <div v-for="agent in agents" class="agent">
          <input type="checkbox" :id="agent.name" :value="agent" v-model="selectedPlayer.notAvailable">
          <label :for="agent.name">
            <img :src="`/agents/${agent.cleanName ?? agent.name}_icon.webp`" :alt="agent.name">
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Agents } from '@/types/agents';
import { useTeamsStore } from '@/stores/teams';
import { storeToRefs } from 'pinia';

export default defineComponent({
  setup() {
    const teamStore = useTeamsStore()
    const { selectedPlayer } = storeToRefs(teamStore)

    const sortedAgents = computed(() => {
      // @ts-ignore Group By ist noch sehr unbekannt
      return Object.groupBy(Agents, ({ role }) => role)
    })

    return { Agents, selectedPlayer, sortedAgents }
  }
})
</script>

<style scoped>
.agent__grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 1rem;
}

.agent__row {
  display: flex;
  gap: 5rem;
  justify-content: start;
}

.agent {
  display: flex;
}
.agent img {
  max-width: 5rem;
  aspect-ratio: 1/1;
  transition: opacity .1s ease-in-out
}

.agent input[type="checkbox"] {
  appearance: unset;
}

.agent input[type="checkbox"]:checked+label img {
  opacity: .5;
}
</style>