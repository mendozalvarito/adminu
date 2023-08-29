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
    //'@tabler/icons-vue',
  ],
  plugins: [
    // { src: "plugins/tabler.js", mode: "client" },
  ],
  app: {
    head: {
      title: "Asistente Administrativo Universitario AdminU",
      // script: [
      //   {
      //     src: '~/@tabler/core/dist/js/tabler.js', type: 'text/javascript'
      //   },
      //   {
      //     src: '~/@tabler/core/dist/js/demo.js', type: 'text/javascript'
      //   },
      // ]
    },
  },
  devtools: { enabled: true },
});
