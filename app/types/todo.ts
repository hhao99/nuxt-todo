export interface Todo {
    id: string
    task: string
    status: boolean
}

export interface TodoAppState {
    list: Todo[]
    status: 'all'| 'todo' | 'done'
}