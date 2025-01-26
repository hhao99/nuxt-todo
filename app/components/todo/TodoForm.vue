<script lang='ts' setup>
import { ref } from 'vue'
import { useTodoStore } from '~/stores/todo'
const { todo } = defineProps<{ todo: Todo }>()

const store = useTodoStore()
const isEditing = todo.id !== ''
const _todo = ref(todo)

const emit = defineEmits(['addTodo', 'updateTodo'])

const handleSubmit = () => {
    if(isEditing) {
        emit('updateTodo', _todo.value)
    } else {
        emit('addTodo', _todo.value)
        _todo.task = '' 
    }
}
</script>
<template>
    <div class="flex flex-col w-10/12 rounded-lg p-4 bg-gray-800 dark:bg-gray-700">
        <form @submit.prevent="handleSubmit">
            <input hidden v-model="todo.id" />
            <div>
                <label htmlFor='task'>New Task:</label> 
                <input type="text" id='task' name='task' 
                class="w-full dark:bg-gray-800 dkar:text-gray-600 focus:bg-gray-600 border-2 border-gray-200 p-2 rounded-lg"
                v-model="_todo.task"
                placeholder="new task to add Todo" />
            </div>
            <div class="flex justify-between items-center">
                <label htmlFor="status">Status: <input type="checkbox" id='status' name='status' 
                    class="mr-2"
                    v-model="_todo.status"
                    value="_todo,status"/>
                </label>         
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {{ isEditing ? 'Update' : 'Add' }}  Todo    
                </button>
            </div>
            
                
                    
            
        </form>
    </div>

</template>