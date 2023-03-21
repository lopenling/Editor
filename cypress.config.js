import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: "localhost:8787",
  },
  e2e: {
    setupNodeEvents: (on, config) => {
      const port = process.env.PORT ?? "8787";
      const configOverrides = {
        baseUrl: `http://localhost:${port}`,
        video: !process.env.CI,
        screenshotOnRunFailure: !process.env.CI,
      };

      // To use this:
      // cy.task('log', whateverYouWantInTheTerminal)
      on("task", {
        log: (message) => {
          console.log(message);

          return null;
        },
      });

      return { ...config, ...configOverrides };
    },
  },
});
