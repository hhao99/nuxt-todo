<script lang='ts' setup>
    defineProps<{ todo: Todo }>()
</script>
<template>
    <div>
        <h1>{{ todo.task}}</h1>
    </div>
</template>