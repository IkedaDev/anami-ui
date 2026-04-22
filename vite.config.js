import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/scss/main.scss",
      name: "AnamiUI",
      formats: ["es"], // Solo para que Vite no se queje, lo que nos importa es el CSS
    },
    rollupOptions: {
      output: {
        assetFileNames: "anami.css", // El nombre final de tu hoja de estilos
      },
    },
  },
});
