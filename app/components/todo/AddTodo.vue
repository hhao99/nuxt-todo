<script lang='ts' setup>
import { ref } from 'vue'
import { useTodoStore } from '~/stores/todo'
const store = useTodoStore()
const task = ref('')
const addTodo = () => {
        store.addTodo(task.value)
}
</script>
<template>
    <div>
        <form @submit.prevent="addTodo">
            <label htmlFor='task'>New Task:</label> <input type="text" id='task' name='task' 
                v-model="task"
                placeholder="Add Todo" />
            <button @click="addTodo">Add</button>
        </form>
    </div>

</template>