<template v-if="team?.length > 0">
	<div class="card">
		<div v-for="(player, index) in team?.players" class="player_row">
			<h6 class="player_row_name" @click="openPlayerModal(index)">{{ player.name }}</h6>
			<close @click="deletePlayer(index)" />
		</div>
		<div class="create_player_row" v-if="team && team?.players.length < 5">
			<input type="text" placeholder="Name" v-model="nameToAdd">
			<addButton @click="addToTeam(teamNumber)" :disabled="nameToAdd == ''"></addButton>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useTeamsStore } from '@/stores/teams';

import addButton from './addButton.vue';
import close from '@/components/icons/close.vue';

export default defineComponent({
	props: {
		team: {
			type: Number,
			required: true
		}
	},
	components: {
		addButton,
		close
	},
	emits: ["openModal"],
	setup(props, ctx) {
		const teamNumber = props.team as 1 | 2
		const teamStore = useTeamsStore();
		const team = teamStore.getTeam(teamNumber);
		const nameToAdd = ref("");


		function deletePlayer(index: number){
			teamStore.deletePlayer(teamNumber, index)
		}

		function addToTeam(team: Number) {
			teamStore.addToTeam(teamNumber, {
				name: nameToAdd.value,
				Agent: null,
				notAvailable: []
			})
			nameToAdd.value = "";
		}

		function openPlayerModal(index: number) {
			teamStore.setSelectedPlayer(teamNumber, index)
			ctx.emit("openModal")
		}
		return { team, addToTeam, teamNumber, nameToAdd, openPlayerModal, deletePlayer }
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
	display: flex;
	gap: .5rem;
	align-items: center;
}
.player_row_name {
	border: 1px solid var(--primary-accent-color);
	border-radius: .4rem;
	padding: .3rem;
	cursor: pointer;
	transition: all .1s ease-in;
}

.player_row_name:hover {
	scale: 1.1;
}

.create_player_row {
	display: flex;
	gap: .5rem;
}
</style>