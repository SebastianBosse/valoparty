<template v-if="team?.length > 0">
	<div class="card">
		<div class="player_row" v-for="(player, index) in team" @click="openPlayerModal(index)">
			<h6>{{ player.name }}</h6>
		</div>
		<div class="create_player_row" v-if="team && team?.length < 5">
			<input type="text" placeholder="Name" v-model="nameToAdd">
			<addButton @click="addToTeam(teamNumber)" :disabled="nameToAdd == ''"></addButton>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useTeamsStore } from '@/stores/teams';

import addButton from './addButton.vue';

export default defineComponent({
	props: {
		team: {
			type: Number,
			required: true
		}
	},
	components: {
		addButton,
	},
	emits: ["openModal"],
	setup(props, ctx) {
		const teamNumber = props.team as 1 | 2
		const teamStore = useTeamsStore();
		const team = teamStore.getTeam(teamNumber);
		const nameToAdd = ref("");


		function addToTeam(team: Number) {
			teamStore.addToTeam(teamNumber, {
				name: nameToAdd.value,
				Agent: null
			})
			nameToAdd.value = "";
		}

		function openPlayerModal(index: number) {
			teamStore.selectedPlayer = index;
			ctx.emit("openModal")

		}
		return { team, addToTeam, teamNumber, nameToAdd, openPlayerModal,  }
	}
})
</script>

<style scoped>
.card {
	display: flex;
	align-items: start;
	flex-direction: column;
	gap: 1rem;

	box-shadow: 0px 3px 5px 4px rgba(0, 0, 0, 0.75);
	background-color: var(--primary-font-color);

	padding: 1rem;
	width: max(20vw, 390px);
	border-radius: .5rem;
}

.player_row {
	border: 1px solid var(--primary-accent-color);
	border-radius: .4rem;
	padding: .3rem;
	cursor: pointer;
	transition: all .1s ease-in;
}

.player_row:hover {
	scale: 1.1;
}

.create_player_row {
	display: flex;
	gap: .5rem;
}
</style>