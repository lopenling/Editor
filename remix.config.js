/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverModuleFormat: 'cjs',
  ignoredRouteFiles: ['**/.*'],
  serverDependenciesToBundle: [
    /^remix-utils.*/,
    'remix-utils',
    'react-typing-effect',
    'react-audio-visualize',
    'react-icons',
    'react-form-wizard-component',
    'jsdom',
  ],
  tailwind: true,
};
