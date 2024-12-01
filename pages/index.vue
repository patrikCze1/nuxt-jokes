<script lang="ts" setup>
const { getJokes, jokes, loading } = useJokes();

await getJokes();

async function handleLoadMoreClick() {
  await getJokes();
}
</script>

<template>
  <div>
    <h1>Jokes</h1>

    <JokeCard v-for="joke in jokes" :key="joke.id" :joke />

    <button :disabled="loading" @click="handleLoadMoreClick">Load more</button>
  </div>
</template>
