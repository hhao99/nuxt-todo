<script lang='ts' setup>
    import type { Todo } from '~/types/todo'
    import { useTodoStore } from '#imports';
    const store = useTodoStore()
    const { todo } = defineProps<{ todo: Todo }>()
    const isEditing = ref(false)
    
    const handleUpdateTodo = (todo: Todo) => {
        todo.status = todo.status ? 'done' : 'todo';
        store.updateTodo(todo)
        isEditing.value = false
    }
</script>
<template>
    <div v-if="!isEditing" class="flex flex-row gap-4 w-10/12">
        <div :class="todo.status ? 'line-through': ''">{{ todo.task }}</div>
        <div><button @click="isEditing=true">edit</button></div>
        <div v-if="todo.status"><button @click="store.removeTodo(todo.id)">remove</button></div>
    </div>
    <div v-else>
        <TodoForm :todo="todo" @update-todo="handleUpdateTodo" />
    </div>
</template>