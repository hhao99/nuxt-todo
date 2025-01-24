import { computed, ref, reactive } from 'vue'
import type { Todo, TodoAppState } from '~/types/todo'
import { v4 as uuidv4 } from 'uuid'

const initialTodo: Todo[] = [
    { id: uuidv4(), task: "start nuxt project", status: 'done' },
    { id: uuidv4(), task: "update tailwindcss support", status: 'done' },
]
export const useTodoStore = defineStore('todoApp', ()=> {
    const list = reactive<Todo[]>(initialTodo)
    const filter = ref('all')

    const filteredList = computed(()=> filter.value === 'all'? list : list.filter( (todo:Todo) => todo.status === filter.value))
    return { filter, filteredList }

    
})