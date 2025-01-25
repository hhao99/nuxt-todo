import { computed } from 'vue'
import type { Todo, TodoAppState } from '~/types/todo'
import { v4 as uuidv4 } from 'uuid'

const initialTodo: Todo[] = [
    { id: uuidv4(), task: "start nuxt project", status: 'done' },
    { id: uuidv4(), task: "update tailwindcss support", status: 'done' },
]
export const useTodoStore = defineStore('todoApp', {
    state: (): TodoAppState => ({
        list: [...initialTodo],
        status: 'all',
    }),
    getters: {
        filteredList(): Todo[] {
            if (this.status === 'all') return this.list
            return this.list.filter((todo) => todo.status === this.status)
        }
    },
    actions: {
        add(task: string) {
            this.list.push({ id: uuidv4(), task, status: 'todo' })
        }
    }
})