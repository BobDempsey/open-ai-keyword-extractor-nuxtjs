<script setup>
// pinia => useAppStore() && storeToRefs() auto imported by nuxt

// pinia appStore
const appStore = useAppStore();
const { portfolioUrl } = storeToRefs(appStore);
</script>

<template>
  <v-footer border class="d-flex justify-center">
    <!-- gitub repo btn -->
    <v-btn
      variant="text"
      size="small"
      color="primary"
      :href="portfolioUrl"
      target="_blank"
      >🤓 {{ new Date().getFullYear() }} - Bob Dempsey</v-btn
    >
  </v-footer>
</template>
