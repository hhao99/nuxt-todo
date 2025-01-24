export interface Todo {
    id: string
    task: string
    status: 'todo' | 'done'
}

export interface TodoAppState {
    list: Todo[]
    filter: 'all'| 'todo' | 'done'
}