export const AvailableAgents =  [
    'Brimstone',
    'Viper',
    'Omen',
    'Killjoy',
    'Cypher',
    'Sova',
    'Sage',
    'Phoenix',
    'Jett',
    'Reyna',
    'Raze',
    'Breach',
    'Reyna',
    'Skye',
    'Yoru',
    'Astra',
    'KAY/O',
    'Chamber',
    'Neon',
    'Fade',
    'Harbor',
    'Gekko',
    'Deadlock',
    'Iso'
] as const;

export type Roles = "Controller" | "Duelist" | "Initiator" | "Sentinel"

export type Agent = {
    name: typeof AvailableAgents[number],
    role: Roles
}

const Agents: Agent[] = [
    {
        name: "Brimstone",
        role: "Controller"
    },
    {
        name: "Viper",
        role: "Controller"
    },
    {
        name: "Omen",
        role: "Controller"
    },
    {
        name: "Killjoy",
        role: "Sentinel"
    },
    {
        name: "Cypher",
        role: "Sentinel"
    },
    {
        name: "Sova",
        role: "Initiator"
    },
    {
        name: "Sage",
        role: "Sentinel"
    },
    {
        name: "Phoenix",
        role: "Duelist"
    },
    {
        name: "Jett",
        role: "Duelist"
    },
    {
        name: "Reyna",
        role: "Duelist"
    },
    {
        name: "Skye",
        role: "Initiator"
    },
    {
        name: "Yoru",
        role: "Duelist"
    },
    {
        name: "Astra",
        role: "Controller"
    },
    {
        name: "KAY/O",
        role: "Initiator"
    },
    {
        name: "Chamber",
        role: "Sentinel"
    },
    {
        name: "Neon",
        role: "Duelist"
    },
    {
        name: "Fade",
        role: "Initiator"
    },
    {
        name: "Harbor",
        role: "Controller"
    },
    {
        name: "Gekko",
        role: "Initiator"
    },
    {
        name: "Deadlock",
        role: "Sentinel"
    },
    {
        name: "Iso",
        role: "Initiator"
    },
]