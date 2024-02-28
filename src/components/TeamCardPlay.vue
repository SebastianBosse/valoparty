<template>
  <div class="play__card">
    <div v-for="player in team?.players" class="player__row">
      <p class="player__name">
        {{ player.name }}
      </p>
      <div>
        <img v-if="player.Agent" class="agent__icon" :src="`/agents/${player.Agent?.cleanName ? player.Agent.cleanName : player.Agent.name}_icon.webp`" alt="">
        <div v-else class="no_agent">x</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTeamsStore } from '@/stores/teams';


export default defineComponent({
  props: {
		team: {
			type: Number,
			required: true
		}
	},
  setup(props) {
    const teamStore = useTeamsStore()
    const teamNumber = props.team as 1|2
    const team = teamStore.getTeam(teamNumber)

    return {
      team
    }
  }
})
</script>

<style scoped>
.play__card {
  padding: 1rem;
  background: var(--primary-font-color);
  color: var(--primary-accent-color);
  border-radius: .375rem;
  box-shadow: var(--primary-font-color) 0px 1px 4px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.player__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.agent__icon {
  max-width: 5rem;
  border-radius: 50%;
  border: 1px solid #000;
}

.no_agent {
  width: 5rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid #000;

  display: flex;
  align-items: center;
  justify-content: center;
}

.player__name {
  font-weight: bold;
  font-size: 2rem;
}
</style>