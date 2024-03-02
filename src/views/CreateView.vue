<template>
	<div class="full-screen-height vp-center">
		<modal @closed="open = false" :open="open">
			<playerModalDisplay />
		</modal>
		<h1>Team Creation</h1>
		<div class="card_wrapper">
			<TeamCard @open-modal="open = true" :team="1"></TeamCard>
			<TeamCard v-if="team2 != null" @open-modal="open = true" :team="2"></TeamCard>
			<VPButton v-else :mode="'button'" :target="''" @click="addTeam()">Add Team</VPButton>
		</div>
		<VPButton :target="'/play'">Lets GO!</VPButton>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue'
import TeamCard from '@/components/TeamCard.vue';
import modal from '@/components/modal.vue';
import playerModalDisplay from '@/components/playerModalDisplay.vue';
import VPButton from '@/components/Button.vue';

import { useTeamsStore } from '@/stores/teams';

export default defineComponent({
	components: {
		TeamCard,
		modal,
		playerModalDisplay,
		VPButton
	},
	setup() {
		const teamStore = useTeamsStore();
		// const team2 = teamStore.$state.team2
		const open = ref(false)

		const team2 = computed(() => {
			return teamStore.$state.team2
		})
		onMounted(() => {
			teamStore.resetAgents()
		})

		function addTeam() {
			teamStore.addTeam();
		}
		return { open, team2, addTeam }
	}
})
</script>

<style scoped>
.card_wrapper {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: start;
	gap: 3rem;
}

.vp-center {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
}
</style>