<template>
  <div class="button__position">
    <VPButton class="test" :mode="'link'" :target="'/create'">Back to Create</VPButton>
  </div>
  <div class="full-screen-height container center">
    <div class="play_wrapper">
      <div class="play_card_container">
        <TeamCardPlay :team="1"></TeamCardPlay>
        <TeamCardPlay v-if="team2 != null" :team="2"></TeamCardPlay>
      </div>
      <VPButton mode="button" target="" @click="startAgentSelection()">Give us Agents!</VPButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import TeamCardPlay from '@/components/TeamCardPlay.vue';
import VPButton from '@/components/Button.vue'
import { useTeamsStore } from '@/stores/teams';

export default defineComponent({
  components: {
    TeamCardPlay,
    VPButton,
  },
  setup () {
    const teamStore = useTeamsStore()
    const team2 = computed(() => {
      console.log(teamStore.getTeam(2));
      return teamStore.getTeam(2)?.value
    })

    function startAgentSelection() {
      teamStore.agentSelection(1);
      setTimeout(() => {
        teamStore.agentSelection(2);
      }, 1000);
    }

    return {
      startAgentSelection,
      team2
    }
  }
})
</script>

<style scoped>
.play_card_container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.play_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
}
.center {
  display: flex;
}

.button__position {
  position: absolute;
  top: 3rem;
  left: 3rem;
}
</style>