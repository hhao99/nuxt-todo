import { computed } from 'vue'
import type { Todo, TodoAppState } from '~/types/todo'
import { v4 as uuidv4 } from 'uuid'

const initialTodo: Todo[] = [
    { id: uuidv4(), task: "start nuxt project", status: 'done' },
    { id: uuidv4(), task: "update tailwindcss support", status: 'done' },
]
export const useTodoStore = defineStore('todoApp',()=> {
    const state = reactive<TodoAppState>({
        list: initialTodo,
        status: 'all'
    })
    const addTodo = (task: string) => {
        state.list.push({ id: uuidv4(), task, status: 'todo' })
    }
    const removeTodo = (id: string) => {
        state.list = state.list.filter(todo => todo.id !== id)
    }
    const updateStatus = (id: string, status: 'todo' | 'done') => {
        const todo = state.list.find(todo => todo.id === id)
        if (todo) {
            todo.status = status
        }
    }
    const filteredList = computed(() => {
        if (state.status === 'all') {
            return state.list
        }
        return state.list.filter(todo => todo.status === state.status)
    })
    return {
        state,
        addTodo,
        removeTodo,
        updateStatus,
        filteredList
    }
})