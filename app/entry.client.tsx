import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode, Suspense } from "react";
import { hydrateRoot } from "react-dom/client";

function hydrate() {
  hydrateRoot(
    document,
    <Suspense fallback={<div>loading</div>}>
      <RemixBrowser />
    </Suspense>
  );
}

if (typeof requestIdleCallback === "function") {
  requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  setTimeout(hydrate, 1);
}
