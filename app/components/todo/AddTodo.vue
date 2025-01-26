<script lang='ts' setup>
import { ref } from 'vue'
import { useTodoStore } from '~/stores/todo'
import TodoForm from './TodoForm.vue';
import type { Todo } from '~/types/todo';
const store = useTodoStore()

const todo = {
    id: '',
    task: '',
    status: false
} as Todo;
const addTodo = (todo: Todo ) => {
    console.log(todo)
    store.addTodo(todo.task)
}
</script>
<template>
    <div class="flex flex-col w-10/12">
        <TodoForm :todo="todo" @add-todo="addTodo" />
    </div>

</template>