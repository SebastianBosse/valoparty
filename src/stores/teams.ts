import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

import type { Player, Team } from '@/types/types'

import { Agents } from '@/types/agents'

export const useTeamsStore = defineStore('teams', () => {
	const team1 = ref<Team>(
		{
			players: [

			],
			roles: [
				"Controller",
				"Duelist",
				"Initiator",
				"Sentinel"
			]
		}
	);
	const team2 = ref<Team>(
		null
	);


	const selectedPlayer = ref<Player | null>(null)


	function addTeam() {
		team2.value = {
			players: [

			],
			roles: [
				"Controller",
				"Duelist",
				"Initiator",
				"Sentinel"
			]
		}
	}
	function setSelectedPlayer(team: 1 | 2, playerIndex: number) {
		switch (team) {
			case 1:
				selectedPlayer.value = team1.value?.players[playerIndex] ?? null
				break;
			case 2:
				selectedPlayer.value = team2.value?.players[playerIndex] ?? null
				break;
			default:
				break;
		}
	}
	function addToTeam(team: 1 | 2, player: Player) {
		switch (team) {
			case 1:
				team1.value?.players.push(player)
				break;
			case 2:
				team2.value?.players.push(player)
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

	}
	function deletePlayer(team: 1 | 2, index: number) {
		switch (team) {
			case 1:
				team1.value?.players.splice(index, 1)
				break;
			case 2:
				team2.value?.players.splice(index, 1)
				break;
			default:
				break;
		}
	}

	function createReducedAgentPool(player: Player, team: Ref<Team>, lastIteration?: Boolean, sameRole?: Boolean) {
		const agentPool = [...Agents]
		const reducedAgentPool = agentPool.filter((agent) => {
			return !player.notAvailable.some((unavailAgent) => {
				return agent.name === unavailAgent.name;
			});
		}).filter((agent) => {
			return !team.value?.players.some((player) => {
				return agent.name === player.Agent?.name
			})
		});

		console.log("Hier noch?!?!?")
		if (sameRole) {
			console.log(reducedAgentPool);
			
			console.log("Entered Same ROle")
			const onlySameRole = reducedAgentPool.filter((agent) => {
				return agent.role == player.Agent?.role
			})
			console.log(onlySameRole);
			return onlySameRole
		}

		if (!lastIteration) {
			const withReducedRoles = reducedAgentPool.filter((agent) => {
				return !team.value?.players.some((teamPlayer) => {
					return teamPlayer.Agent?.role === agent.role;
				});
			})
			return withReducedRoles
		}



		return reducedAgentPool;
	}

	function distributeRandomAgent(playerIndex: number, team: Ref<Team>) {
		const player = team.value?.players[playerIndex]
		if (player) {
			const reducedPool = createReducedAgentPool(player, team, true, true )
			const agent = reducedPool[Math.floor(Math.random() * reducedPool.length)];
			player.Agent = agent;
		}
	}

	function distributeRandomAgents(team: Ref<Team>, ignoreTeamRules: Boolean = false) {
		team.value?.players.forEach((player, index) => {
			const lastIteration = index === team.value?.players.length! - 1;
			const reducedPool = createReducedAgentPool(player, team, lastIteration)
			const agent = reducedPool[Math.floor(Math.random() * reducedPool.length)];
			player.Agent = agent;
			// const indexToRemove = team.value?.roles.findIndex((role) => role === agent.role);
		})

	}

	function agentSelection(team: 1 | 2) {
		switch (team) {
			case 1:
				team1.value?.players.forEach((player) => player.Agent = null)
				distributeRandomAgents(team1);
				break;
			case 2:
				team2.value?.players.forEach((player) => player.Agent = null)
				distributeRandomAgents(team2);
				break;
			default:
				console.error("no valid team given:", team)
				break;
		}
	}

	function resetAgents() {
		team1.value?.players.forEach((player) => player.Agent = null)
		team2.value?.players.forEach((player) => player.Agent = null)
	}
	return { team1, team2, addToTeam, getTeam, selectedPlayer, getPlayer, setSelectedPlayer, deletePlayer, agentSelection, resetAgents, addTeam, distributeRandomAgent }
})
