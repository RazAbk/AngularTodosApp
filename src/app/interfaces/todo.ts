import { Task } from "./task";

export interface Todo {
    id?: string;
    title: string;
    tasks: Task[];
}
