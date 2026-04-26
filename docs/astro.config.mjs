// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Anami UI",
      customCss: ["../scss/components-only.scss"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Components",
          autogenerate: { directory: "components" },
        },
        {
          label: "Forms",
          autogenerate: { directory: "forms" },
        },
      ],
    }),
  ],
});
