import type { Agent } from "./agents"

import { AvailableAgents } from "./agents"

export type Player = {
    name: String,
    Agent: Agent | null
    notAvailable?: typeof AvailableAgents[number][]
}

export type Team = Player[]