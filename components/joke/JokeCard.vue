<script lang="ts" setup>
import type { IJoke } from "~/types/joke";

defineProps<{ joke: IJoke }>();
</script>

<template>
  <article class="card">
    <header class="card__header">
      {{ joke.setup }}
      <span class="card__type" :class="`card__type--${joke.type}`">{{
        joke.type
      }}</span>
    </header>

    <p>{{ joke.punchline }}</p>
  </article>
</template>

<style scoped lang="scss">
.card {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
  }

  &__type {
    background-color: purple;
    color: white;
    border-radius: 4px;
    padding: 4px 12px;

    &--programming {
      background-color: green;
    }
  }
}
</style>
