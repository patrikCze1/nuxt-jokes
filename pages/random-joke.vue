<script lang="ts" setup>
const { getJoke, randomJoke } = useJokes();

await getJoke();

if (!randomJoke.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Joke not found",
  });
}
</script>

<template>
  <div>
    <h1>Random Joke</h1>

    <JokeCard :joke="randomJoke!" />
  </div>
</template>
