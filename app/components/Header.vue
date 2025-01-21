<script lang="ts" setup>
const  links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
]
</script>
<template>
    <div class="flex bg-gray-200 dark:bg-gray-800 dark:text-gray-100 p-4">
        <div class="flex-1">
            <h1 class="text-2xl">My App</h1>
        </div>
        <div class="flex-1 text-right space-x-4">
            
            <NuxtLink v-for="link in links" :key="link.path" :to="link.path" class="hover:underline">{{ link.name }}</NuxtLink> 
        </div>
    </div>
  </template>
  