import type { ApiError } from "~/types/error";

export function useApi<T, E = ApiError>(
  url: string,
  options: Parameters<typeof useFetch<T, E>>[1] = {}
) {
  return useFetch<T, E>(url, {
    ...options,
    baseURL: useRuntimeConfig().public.apiBase,
  });
}
