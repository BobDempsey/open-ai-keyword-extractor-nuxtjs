<script setup>
// pinia => useAppStore() && storeToRefs() auto imported by nuxt

// pinia appStore
const appStore = useAppStore();
const { openAiChatTemperature } = storeToRefs(appStore);

// fixes hydration mismatch warning in console when using v-tooltip
const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});
</script>

<template>
  <v-alert variant="text" class="mb-5">
    <div class="d-flex align-items-center">
      <p class="mb-2 mr-4 text-subtitle-1 font-weight-medium">
        Select Mode/Temperature:
      </p>

      <!-- tooltip that explains temperature -->
      <v-tooltip
        text="Temperature is a parameter of OpenAI ChatGPT that governs the randomness and thus the creativity of the responses."
        v-if="mounted"
        location="top"
      >
        <template v-slot:activator="{ props }">
          <v-icon v-bind="props" style="margin-top: 2px"
            >mdi-information-outline</v-icon
          >
        </template>
      </v-tooltip>
    </div>

    <!-- mode selection radio group -->
    <v-radio-group
      inline
      density="compact"
      color="primary"
      v-model="openAiChatTemperature"
      hide-details
    >
      <v-radio label="Normal" value="1" class="mr-3"></v-radio>
      <v-radio label="Creative" value="2" class="mr-3"></v-radio>
      <v-radio label="Conservative" value="0.5" class="mr-3"></v-radio>
    </v-radio-group>
  </v-alert>
</template>
