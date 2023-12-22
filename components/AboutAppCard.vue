<script setup>
// pinia => useAppStore() && storeToRefs() auto imported by nuxt

// pinia appStore
const appStore = useAppStore();
const { loading, githubRepoUrl } = storeToRefs(appStore);
</script>

<template>
  <v-card title="About This App" :loading="loading">
    <!-- about this app information -->
    <v-card-text>
      <p class="mb-4">
        <strong>Full stack app</strong> built with
        <strong>Vue 3, Nuxt 3, Vuetify 3, and Pinia</strong>
      </p>
      <p class="mb-4">Uses the <strong>OpenAI Node JS SDK</strong></p>
      <p class="mb-4">
        Uses the
        <strong>OpenAI chat completions API (gpt-3.5-turbo)</strong> for keyword
        extraction
      </p>
      <p>CI/CD and hosting on <strong>Vercel</strong></p>
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
