<template>
  <nav>
    <ul>
      <li><strong>Jokes</strong></li>
    </ul>

    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/random-joke">Random joke</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
:deep(.router-link-exact-active) {
  text-decoration: underline;
}
</style>
