// const { createRoutesFromFolders } = require("@remix-run/v1-route-convention");

/** @type {import('@remix-run/dev').AppConfig} */

module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // server:
  //   process.env.NETLIFY || process.env.NETLIFY_LOCAL
  //     ? "./server.ts"
  //     : undefined,
  // serverBuildPath: ".netlify/functions-internal/server.js",
  serverModuleFormat: "cjs",
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  future: {
    v2_routeConvention: true,
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
    v2_meta: true,
  },
  // routes(defineRoutes) {
  //   // uses the v1 convention, works in v1.15+ and v2
  //   return createRoutesFromFolders(defineRoutes);
  // },
};
