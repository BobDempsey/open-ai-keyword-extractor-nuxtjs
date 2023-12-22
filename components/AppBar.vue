<script setup>
// vue => computed auto imported by nuxt

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
  <v-app-bar :elevation="0" color="primary" title="Open AI Keyword Extractor">
    <v-toolbar-items>
      <!-- toggle theme -->
      <v-btn icon class="px-8" @click.stop="toggleTheme">
        <v-icon v-if="isDark">mdi-lightbulb-off-outline</v-icon>
        <v-icon v-else>mdi-lightbulb-on-outline</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>
