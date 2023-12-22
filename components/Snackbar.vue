<script setup>
// vue => computed auto imported by nuxt

// pinia => useAppStore() && storeToRefs() auto imported by nuxt
// pinia appStore
const appStore = useAppStore();
const { showSnackbar, snackbarColor, snackbarMessage } = storeToRefs(appStore);
</script>

<template>
  <v-snackbar
    location="top right"
    :timeout="3000"
    :color="snackbarColor || 'success'"
    v-model="showSnackbar"
    rounded="pill"
  >
    {{ snackbarMessage }}
  </v-snackbar>
</template>

<style>
.v-snackbar__content {
  text-align: center !important;
}
</style>
