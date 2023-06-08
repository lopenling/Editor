import { useLoaderData } from '@remix-run/react';

export function useLiveLoader<T>() {
  return useLoaderData<T>();
}
