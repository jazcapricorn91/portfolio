// uno.config.ts
import { defineConfig, presetWind3, presetWebFonts } from "unocss";

export default defineConfig({
  content: {
    filesystem: [
      // Narrow scope to specific directories
      "src/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}}",
      "src/components/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}}",
      "src/pages/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}}",
      "src/layouts/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}}"
    ],  },
  theme: {
    boxShadow: {
      custom: `2px 2px 0`,
      "custom-hover": `1px 1px 0`,
    },
    fontFamily: {
      sans: ["CabinetGrotesk", "Satoshi"],
    },
    gridTemplateRows: {
      "auto-250": "repeat(auto-fill, 250px)",
    },
    gridTemplateColumns: {
      "4-minmax": "repeat(4, minmax(150px, 1fr))",
    },
    colors: {
      gray: {
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#E5E5E5",
        300: "#D4D4D4",
        400: "#A3A3A3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#180018ff",
      },
      darkslate: {
        50: "#4e434dff",
        100: "#332a33ff",
        200: "#352731ff",
        300: "#272327ff",
        400: "#312530ff",
        500: "#1f1c1fff" /* Exactly your example for the background */,
        600: "#1a031dff",
        700: "#0f000eff",
        800: "#1f011dff",
        900: "#160115ff" /* Deeper and darker */,
      },
      primary: {
        100: "#db7feeff",
        200: "#eca3f3ff",
        300: "#cb79ecff",
        400: "#e64fc0ff",
        500: "#e639d8ff",
        600: "#cf2fc7ff",
        700: "#b325b8ff",
        800: "#a01b99ff",
        900: "#53044dff",
      },
    },
  },
  presets: [
    presetWind3(),
    presetWebFonts({
      provider: "fontshare",
      fonts: {
        sans: ["Cabinet Grotesk", "Satoshi"],
        serif: "Zodiak",
      },
    }),
  ],
});
