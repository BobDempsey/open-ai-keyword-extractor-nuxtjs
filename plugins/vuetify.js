// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

// import "vuetify/styles";
import "@/assets/scss/style.scss";

import { createVuetify } from "vuetify";

const lightTheme = {
  dark: false,
  variables: {
    "border-color": "#e5eaef",
  },
  colors: {
    primary: "#5D87FF",
    secondary: "#49BEFF",
    info: "#539BFF",
    success: "#13DEB9",
    accent: "#FFAB91",
    warning: "#FFAE1F",
    error: "#FA896B",
    lightprimary: "#ECF2FF",
    lightsecondary: "#E8F7FF",
    lightsuccess: "#E6FFFA",
    lighterror: "#FDEDE8",
    lightinfo: "#EBF3FE",
    lightwarning: "#FEF5E5",
    textPrimary: "#2A3547",
    textSecondary: "#2A3547",
    borderColor: "#e5eaef",
    inputBorder: "#DFE5EF",
    containerBg: "#ffffff",
    background: "#ffffff",
    hoverColor: "#f6f9fc",
    surface: "#fff",
    "on-surface-variant": "#fff",
    grey100: "#F2F6FA",
    grey200: "#EAEFF4",
  },
};

const darkTheme = {
  dark: true,
  variables: {
    "border-color": "#333F55",
  },
  colors: {
    primary: "#5D87FF",
    secondary: "#49BEFF",
    info: "#539BFF",
    success: "#13DEB9",
    accent: "#FA896B",
    warning: "#FFAE1F",
    error: "#FA896B",
    lightprimary: "#253662",
    lightsecondary: "#1C455D",
    lightsuccess: "#1B3C48",
    lighterror: "#4B313D",
    lightinfo: "#223662",
    lightwarning: "#4D3A2A",
    textPrimary: "#EAEFF4",
    textSecondary: "#7C8FAC",
    borderColor: "#333F55",
    inputBorder: "#465670",
    containerBg: "#2a3447",
    background: "#2a3447",
    hoverColor: "#333f55",
    surface: "#2a3447",
    "on-surface-variant": "#2a3447",
    grey100: "#333F55",
    grey200: "#465670",
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "dark",
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
    },
    defaults: {
      VCard: {
        rounded: "lg",
      },
      VCardActions: {
        VBtn: {
          rounded: false,
        },
      },
      VBtn: {
        color: "primary",
        variant: "flat",
        rounded: true,
      },
      VTextarea: {
        clearable: true,
        counter: true,
      },
    },
  });
  app.vueApp.use(vuetify);
});
