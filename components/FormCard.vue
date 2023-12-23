<script setup>
// pinia => useAppStore() && storeToRefs() auto imported by nuxt

// pinia appStore
const appStore = useAppStore();
const { loading, text, appTitle } = storeToRefs(appStore);

// onSubmit function cannot be destructured from app store
const onSubmit = appStore.onSubmit;

// ref to grab valid state of form
const form = ref();

// form rules
const formRules = ref([
  // value cannot be empty
  (v) => (v && v.trim().length !== 0) || "Text is required",
  // value must be less than 1000 characters
  (v) => v.length <= 1000 || "Text must be less than 1000 characters",
]);
</script>

<template>
  <v-card :loading="loading" :title="appTitle">
    <!-- app description text -->
    <v-card-text>
      <p class="mb-3 mt-1">
        This application uses the
        <strong>OpenAI API to extract keywords from your text.</strong>
      </p>
      <p class="mb-3">
        It's great for
        <strong>blog posts, YouTube videos, school assignments,</strong>
        and more!
      </p>
      <p class="text-subtitle mb-5">
        Paste in your text below and we'll automatically extract the keywords
        for you!
      </p>

      <!-- form to submit -->
      <v-form ref="form" :disabled="loading" @submit.prevent="onSubmit(form)">
        <!-- textarea to enter text to extract keywords -->
        <v-textarea
          label="Enter text to extract keywords"
          v-model.trim="text"
          :loading="loading"
          :disabled="loading"
          :rules="formRules"
          maxlength="1000"
          counter
          clearable
          hint="Max 1000 characters"
          class="mb-2"
        />

        <!-- submit btn -->
        <v-btn
          type="submit"
          color="primary"
          flat
          :loading="loading"
          :disabled="loading"
          block
        >
          <v-icon start>mdi-robot-outline</v-icon>
          Extract Keywords</v-btn
        >
      </v-form>
    </v-card-text>
  </v-card>
</template>
