<script lang="ts" setup>
const  links = [
    { name: 'Home', path: '/' },
    { name: 'Todo App Demo', path: '/todo'},
    { name: 'About', path: '/about' },
]
</script>
<template>
    <div class="container min-w-full min-h-10 bg-gray-100/50 dark:bg-gray-800 dark:text-aliceblue">
        <div class="flex items-center justify-between p-4">
            <div class="flex-1">
                <h1 class="text-2xl">My App</h1>
            </div>
            <div class="flex-1 text-right space-x-4">
                <NuxtLink class="hover:underline" v-for="link in links" :key="link.path" :to="link.path" >{{ link.name }}</NuxtLink>
            </div>  
        </div>
    </div>
  </template>
  