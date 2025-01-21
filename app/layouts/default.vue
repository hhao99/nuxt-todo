<template>
    <div class="container min-w-full min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white p-4">
        <div role="header">
            <Header />
        </div>
        <main>
            <slot />
        </main>
        <div role="footer">
            <Footer />
        </div>
    </div>
  </template>
  