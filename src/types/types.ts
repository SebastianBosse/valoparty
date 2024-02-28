import type { Agent, Roles } from "./agents"

import { AvailableAgents } from "./agents"

export type Player = {
    name: String,
    Agent: Agent | null
    notAvailable: Agent[]
}

export type Team = {players: Player[], roles: Roles[]} | null