export interface Task {
    id?: string; // on met un id ou pas ? Firebase en crée un auto
    title: string;
    status: 'pending' | 'completed';
}

// Définition de l'interface Task
export interface TaskSignal {
    title: string;
    priority: {value: 'haute', order: 2} | {value: 'moyenne', order: 1} | {value: 'basse', order: 0};
    complete: boolean;
}