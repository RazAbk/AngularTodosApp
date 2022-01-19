export interface task {
    id: string;
    description: string;
    isDone: boolean;
}

export interface todo {
    id?: string;
    title: string;
    tasks: task[];
}