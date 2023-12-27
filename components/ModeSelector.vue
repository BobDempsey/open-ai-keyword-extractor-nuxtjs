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

const temperatureExplanationText = ref(
  "Temperature is a parameter of OpenAI ChatGPT that governs the randomness and creativity of the responses"
);
</script>

<template>
  <v-alert variant="text" class="mb-5">
    <div class="d-block d-sm-flex align-items-center">
      <p class="mb-2 mr-4 text-subtitle-1 font-weight-medium">
        Select Mode/Temperature:
      </p>

      <!-- tooltip that explains temperature mobile devices -->
      <div class="d-none d-sm-block mb-4">
        <v-tooltip
          :text="temperatureExplanationText"
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
      <div class="d-sm-none d-flex mb-6">
        <v-icon style="margin-top: 2px" size="small"
          >mdi-information-outline</v-icon
        >
        <span class="d-inline-block ml-2 text-caption font-italic">{{
          temperatureExplanationText
        }}</span>
      </div>
      <!-- tooltip that explains temperature above mobile devices -->
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
