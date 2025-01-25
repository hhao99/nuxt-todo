<script lang='ts' setup>
import { ref } from 'vue'
import { useTodoStore } from '~/stores/todo'
const store = useTodoStore()
const task = ref('')
const addTodo = () => {
        store.addTodo(task.value)
        task.value = 'new task'
}
</script>
<template>
    <div class="flex flex-col w-10/12">
        <form @submit.prevent="addTodo">
            <label htmlFor='task'>New Task:</label> 
            <input type="text" id='task' name='task' 
                class="w-full dark:bg-gray-800 dkar:text-gray-600 focus:bg-gray-600 border-2 border-gray-200 p-2 rounded-lg"
                v-model="task"
                @keyup.enter.once="addTodo"
                placeholder="Add Todo" />
        </form>
    </div>

</template>