export default {
  debug: process.env.NODE_ENV !== "production",
  fallbackLng: "en",
  supportedLngs: ["en", "bo"],
  defaultNS: "common",
  react: { useSuspense: false },
};
