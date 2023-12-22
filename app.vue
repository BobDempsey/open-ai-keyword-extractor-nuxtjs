<script setup>
// vue => computed auto imported by nuxt

// theme
import { useTheme } from "vuetify";
const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
</script>

<template>
  <v-app :class="{ 'bg-grey-lighten-5': !isDark }">
    <AppBar />
    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>
