<template>
	<div class="full-screen-height vp-center">
		<modal @closed="open = false" :open="open">
			<playerModalDisplay />
		</modal>
		<h1>Team Creation</h1>
		<div class="card_wrapper">
			<TeamCard @open-modal="open = true" :team="1"></TeamCard>
			<TeamCard @open-modal="open = true" :team="2"></TeamCard>
		</div>
		<VPButton :target="'/play'">Lets GO!</VPButton>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
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
		teamStore.$subscribe((mutation, state) => {
			localStorage.setItem('teams', JSON.stringify(state));
		})
		const open = ref(false)

		onMounted(() => {
			teamStore.resetAgents()
		})
		return { open }
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