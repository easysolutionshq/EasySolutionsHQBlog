<template>
    <div>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center px-4 md:px-6 py-2.5">
            <a href="/">
                <img src="~/assets/logo.png" class="h-6 mr-3 sm:h-9" alt="Logo" />
            </a>
        </div>
    </nav>
    
    <div class="py-3">
        <nav class="bg-green-300 p-2 rounded">
            <div class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <NuxtLink to="/" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home Page</NuxtLink>
                <NuxtLink to="/blog/auto" class="text-gray-900 dark:text-white hover:underline">Automobile</NuxtLink>
                <NuxtLink href="/blog/tech" class="text-gray-900 dark:text-white hover:underline">Tech</NuxtLink>
                <NuxtLink href="/blog/house" class="text-gray-900 dark:text-white hover:underline">House</NuxtLink>
                <NuxtLink href="/blog/pets" class="text-gray-900 dark:text-white hover:underline">Pets</NuxtLink>
            </div>
        </nav>
    </div>
    </div>
    
    </template>
    