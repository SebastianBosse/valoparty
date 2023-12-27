<template>
	<div class="full-screen-height">
		<modal @closed="open = false" :open="open" :player-index="selectedPlayer">
			<playerModalDisplay :player-data="{}" />
		</modal>
		<h1>Create your Team(s)</h1>
		<div class="card_wrapper">
			<TeamCard @open-modal="open = true" :team="1"></TeamCard>
			<TeamCard @open-modal="open = true" :team="2"></TeamCard>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import TeamCard from '@/components/TeamCard.vue';
import modal from '@/components/modal.vue';
import playerModalDisplay from '@/components/playerModalDisplay.vue';

import { useTeamsStore } from '@/stores/teams';
import { storeToRefs } from 'pinia';
import type { Player } from '@/types/types';

export default defineComponent({
	components: {
		TeamCard,
		modal,
		playerModalDisplay
	},
	setup() {
		const teamStore = useTeamsStore();
		const open = ref(false)
		const { selectedPlayer } = storeToRefs(teamStore);

		const playerData = ref<Player | null>(null)

		watch(() => selectedPlayer.value, (newValue, oldValue) => {
			// TODO Speicher Selected Player als key(team) => value(spielerIndex) ab um einfacher an den Richtigen spieler zu kommen
			// playerData.value = teamStore.getPlayer()
		})

		return { selectedPlayer, open }
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
</style>