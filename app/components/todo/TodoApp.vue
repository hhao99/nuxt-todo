<script lang='ts' setup>
    import AddTodo from './AddTodo.vue'
    import TodoList from './TodoList.vue'
</script>
<template>
    <div class="p-6 md:p-12 gap-6 md:gap-12 flex flex-col items-center">
        <h1 class="text-gray-200 dark:text-gray-100">Todo App</h1>
        <AddTodo />
        <TodoList />
    </div>
</template>