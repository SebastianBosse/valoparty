<template>
  <div>
    <!-- <h3>{{ selectedPlayer?.name }}</h3> -->
    <input v-if="selectedPlayer" class="name__edit_input" type="text" v-model="selectedPlayer.name">
    <div>
      <h4>My Agents</h4>
      <agentGridSelection />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTeamsStore } from '@/stores/teams';
import { storeToRefs } from 'pinia';
import agentGridSelection from '@/components/agentGridSelection.vue'

export default defineComponent({
  components: {
    agentGridSelection
  },
  setup (props) {
    const teamStore = useTeamsStore()

    const { selectedPlayer } = storeToRefs(teamStore);

    return { selectedPlayer }
  }
})
</script>

<style scoped>
.name__edit_input {
  all: unset;
  font-size: 3rem;
  color: var(--primary-accent-color);
  font-weight: bold;
  background-color: var(--primary-font-color);
  max-width: 20rem;
  border-radius: 1rem;
  padding: 0 1rem;
  border: 2px solid var(--primary-accent-color);
}
</style>