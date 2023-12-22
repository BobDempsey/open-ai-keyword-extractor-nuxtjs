<script setup>
// pinia => useAppStore() && storeToRefs() auto imported by nuxt

// pinia appStore
const appStore = useAppStore();
const { loading, text } = storeToRefs(appStore);

// onSubmit function cannot be destructured from app store
const onSubmit = appStore.onSubmit;
</script>

<template>
  <v-form ref="form" :disabled="loading" @submit.prevent="onSubmit">
    <!-- textarea to enter text to extract keywords -->
    <v-textarea label="Enter text to extract keywords" v-model="text" />

    <!-- submit btn -->
    <v-btn
      type="submit"
      color="primary"
      flat
      :loading="loading"
      :disabled="loading"
      >Extract Keywords</v-btn
    >
  </v-form>
</template>
