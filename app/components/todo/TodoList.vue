<script lang='ts' setup>
    import { useTodoStore } from '~/stores/todo'
    const store = useTodoStore()
    console.log(store.list )
</script>
<template>
    <div class="grid gap-4">
        <div>
            <h3>Todo List</h3>
        </div>
        <div></div>
        <div>
            <h5>total tasks {{ store.filteredList.length }} with filter of {{ store.filter }}</h5>
        </div>
    </div>
</template>