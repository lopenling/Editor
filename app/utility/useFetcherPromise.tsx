import { useRef, useEffect } from "react";
import { useFetcher } from "@remix-run/react";
function useFetcherWithPromise() {
  let resolveRef = useRef();
  let promiseRef = useRef();
  if (!promiseRef.current) {
    promiseRef.current = new Promise((resolve) => {
      resolveRef.current = resolve;
    });
  }
  let fetcher = useFetcher();

  async function submit(...args) {
    fetcher.submit(...args);
    return promiseRef.current;
  }

  useEffect(() => {
    if (fetcher.data) {
      resolveRef.current(fetcher.data);
    }
  }, [fetcher]);

  return { ...fetcher, submit };
}

export default useFetcherWithPromise;
