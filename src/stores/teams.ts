import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { Player, Team } from '@/types/types'

export const useTeamsStore = defineStore('teams', () => {
	const team1 = ref<Team>([
	{
		name: "Sebastian",
		Agent: {
			name: "Astra",
			role: "Controller"
		},
	},
	{
		name: "Marcel",
		Agent: null
	}
	]);
	const team2 = ref<Team>([
		{
			name: "Sebastian",
			Agent: {
				name: "Astra",
				role: "Controller"
			},
		},
		{
			name: "Marcel",
			Agent: null
		}
	]);

	const selectedPlayer = ref<Number | null>(null)

	function addToTeam(team: 1 | 2, player: Player) {
		switch (team) {
			case 1:
				team1.value.push(player)
				break;
			case 2:
				team2.value.push(player)
				break;
			default:
				break;
		}
	}
	function getTeam(team: 1 | 2) {
		switch (team) {
			case 1:
				return team1
			case 2:
				return team2
			default:
				break;
		}
	}
	function getPlayer(team: 1 | 2, index: number) {
		switch (team) {
			case 1:
				return team1.value[index]
			case 2: 
				return team1.value[index]
			default:
				break;
		}
	}

	return { team1, team2, addToTeam, getTeam, selectedPlayer, getPlayer }
})
