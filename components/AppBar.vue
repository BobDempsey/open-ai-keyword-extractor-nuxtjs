<script setup>
// vue => computed auto imported by nuxt

// pinia => useAppStore() && storeToRefs() auto imported by nuxt
// pinia appStore
const appStore = useAppStore();
const { loading, githubRepoUrl } = storeToRefs(appStore);

// THEME
import { useTheme } from "vuetify";
const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);

// THEME => toggle dark and light theme
const toggleTheme = () => {
  if (isDark.value) return (theme.global.name.value = "light");
  return (theme.global.name.value = "dark");
};
</script>

<template>
  <v-app-bar
    density="comfortable"
    :elevation="0"
    color="primary"
    title="Open AI Keyword Extractor - Chat GPT"
  >
    <v-toolbar-items>
      <!-- github repo btn -->
      <v-btn
        icon
        class="px-8"
        :loading="loading"
        :disabled="loading"
        :href="githubRepoUrl"
        target="_blank"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>

      <!-- toggle theme btn -->
      <v-btn
        icon
        class="px-8"
        @click.stop="toggleTheme"
        :loading="loading"
        :disabled="loading"
      >
        <v-icon v-if="isDark">mdi-lightbulb-off-outline</v-icon>
        <v-icon v-else>mdi-lightbulb-on-outline</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>
