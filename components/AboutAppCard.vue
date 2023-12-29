<script setup>
// computed and ref auto imported by nuxt

// vuetify theme
import { useTheme } from "vuetify";
const theme = useTheme();
const isDarkTheme = computed(() => theme.global.current.value.dark);

// pinia => useAppStore() && storeToRefs() auto imported by nuxt

// pinia appStore
const appStore = useAppStore();
const { loading, githubRepoUrl } = storeToRefs(appStore);
</script>

<template>
  <v-card
    title="About This App"
    :loading="loading"
    :variant="isDarkTheme ? 'tonal' : 'elevated'"
  >
    <!-- about this app information -->
    <v-card-text>
      <p class="mb-4">
        <strong>Full stack app</strong> built with
        <strong>Vue 3, Nuxt 3, Vuetify 3, and Pinia</strong>
      </p>
      <p class="mb-4">
        Uses <strong>custom Vuetify theme</strong> with global UI defaults
      </p>
      <p class="mb-4">Uses the <strong>OpenAI Node JS SDK</strong></p>
      <p class="mb-4">
        Uses the
        <strong>OpenAI chat completions API (gpt-3.5-turbo)</strong> for keyword
        extraction
      </p>
      <p class="mb-5">CI/CD and hosting on <strong>Vercel</strong></p>

      <!-- openai code used to query api -->
      <v-alert :variant="isDarkTheme ? 'outlined' : 'tonal'" class="mb-4">
        <p class="mb-2">
          <strong>OpenAI query used to extract keywords:</strong>
        </p>
        <code>
          const content = `Extract keywords for a blog post from this text:
          ${text}. Separate each word with a comma. Remove trailing commas.`;
        </code>
      </v-alert>

      <!-- Vuetify custom light theme: -->
      <v-alert :variant="isDarkTheme ? 'outlined' : 'tonal'" class="mb-4">
        <p class="mb-2">
          <strong>Vuetify custom light theme:</strong>
        </p>
        <pre>
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
        </pre>
      </v-alert>

      <!-- Vuetify custom dark theme: -->
      <v-alert :variant="isDarkTheme ? 'outlined' : 'tonal'" class="mb-4">
        <p class="mb-2">
          <strong>Vuetify custom dark theme:</strong>
        </p>
        <pre>
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
        </pre>
      </v-alert>

      <!-- Vuetify global ui defaults: -->
      <v-alert :variant="isDarkTheme ? 'outlined' : 'tonal'">
        <p class="mb-2">
          <strong>Vuetify global UI defaults:</strong>
        </p>
        <pre>
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
        </pre>
      </v-alert>
    </v-card-text>
    <!-- github repo btn -->
    <v-card-actions>
      <v-btn
        color="primary"
        target="_blank"
        :href="githubRepoUrl"
        :loading="loading"
        :disabled="loading"
        size="small"
      >
        <v-icon start>mdi-open-in-new</v-icon>
        Github Repo</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
