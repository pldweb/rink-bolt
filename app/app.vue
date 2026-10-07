<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,500;1,600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-[#061923] text-gray-900 antialiased transition-colors duration-200;
  font-family: 'Montserrat', system-ui, sans-serif;
}

</style>
