export interface Todo {
    id: string
    task: string
    status: 'todo' | 'done'
}

export interface TodoAppState {
    list: Todo[]
    status: 'all'| 'todo' | 'done'
}