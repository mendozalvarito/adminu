// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@tabler/core/dist/css/tabler.css",
    "@tabler/core/dist/css/tabler-flags.css",
    "@tabler/core/dist/css/tabler-payments.css",
    "@tabler/core/dist/css/tabler-vendors.css",
    "@tabler/core/dist/css/demo.css",
    "assets/css/style.css",
  ],
  modules: [
    // '@tabler/core',
  ],
  // plugins: [
  //   { src: "@tabler/core/dist/js/tabler.js", mode: "client" },
  //   { src: "@tabler/core/dist/js/demo.js", mode: "client" },
  // ],
  app: {
    head: {
      title: "Asistente Administrativo Universitario AdminU",
      // script: [
      //   {
      //     src: '@/@tabler/core/dist/js/tabler.js',
      //   },
      //   {
      //     src: '@tabler/core/dist/js/demo.js',
      //   },
      // ]
    },
  },
  devtools: { enabled: true },
});
