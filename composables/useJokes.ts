import { useApi } from "~/services/fetch";
import type { ApiError } from "~/types/error";
import type { IJoke } from "~/types/joke";

export default function useJokes() {
  const randomJoke = ref<IJoke | null>(null);
  const jokes = ref<IJoke[]>([]);
  const loading = ref(false);

  const { start, finish } = useLoadingIndicator();

  async function getJokes() {
    start();
    loading.value = true;

    const { data, error } = await useApi<IJoke[]>("/random_ten");

    if (data.value) {
      jokes.value = [...jokes.value, ...data.value];
    } else if (error.value) handleError(error.value);

    loading.value = false;
    finish();
  }

  async function getJoke() {
    start();
    loading.value = true;

    const { data, error } = await useApi<IJoke>("/random_joke");

    if (data.value) {
      randomJoke.value = data.value;
    } else if (error.value) handleError(error.value);

    loading.value = false;
    finish();
  }

  function handleError(error: ApiError) {
    console.error(error);
  }

  return {
    getJokes,
    getJoke,
    randomJoke,
    jokes,
    loading,
  };
}
