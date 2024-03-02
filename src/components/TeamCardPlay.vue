<template>
  <div class="play__card">
    <div v-for="(player, index) in team?.players" class="player__row">
      <p class="player__name">
        {{ player.name }}
      </p>
      <div class="agent_reroll_wrap">
        <div>
          <img v-if="player.Agent" class="agent__icon"
            :src="`/agents/${player.Agent?.cleanName ? player.Agent.cleanName : player.Agent.name}_icon.webp`" alt="">
          <div v-else class="no_agent">x</div>
        </div>
        <div v-if="player.Agent">
          <svg @click="rerollSingleAgent(index)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="reroll_button">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </div>
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
    const teamNumber = props.team as 1 | 2
    const team = teamStore.getTeam(teamNumber)

    function rerollSingleAgent(playerIndex: number) {
      if(team) {
        teamStore.distributeRandomAgent(playerIndex, team)
      }
    }
    return {
      team,
      rerollSingleAgent
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

.agent_reroll_wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.reroll_button {
  width: 2rem;
  aspect-ratio: 1;
  cursor: pointer;
  transition: all .3s ease-in-out;
}

.reroll_button:hover {
  transform: rotate(360deg);
}
</style>