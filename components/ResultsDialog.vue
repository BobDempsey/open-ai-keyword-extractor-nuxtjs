<script setup>
// pinia => useAppStore() && storeToRefs() auto imported by nuxt

// pinia appStore
const appStore = useAppStore();
const { showResultsDialog, results, resultsCopiedToClipboard } =
  storeToRefs(appStore);

// copyResultsToClipboard function cannot be destructured from app store
const copyResultsToClipboard = appStore.copyResultsToClipboard;

// btn ui color based on resultsCopiedToClipboard
const btnColor = computed(() => {
  return resultsCopiedToClipboard.value ? "success" : "primary";
});

// btn icon based on resultsCopiedToClipboard
const btnIcon = computed(() => {
  return resultsCopiedToClipboard.value ? "mdi-check" : "mdi-clipboard-outline";
});

// reset resultsCopiedToClipboard when dialog is closed
watch(showResultsDialog, (newVal) => {
  if (!newVal) {
    resultsCopiedToClipboard.value = false;
  }
});

// format results to be more readable
// removes dashes and periods
const formattedResults = computed(() => {
  return results.value.replaceAll("-", " ").replaceAll(".", " ");
});
</script>

<template>
  <v-dialog v-model="showResultsDialog" width="500px">
    <v-card title="Open AI Keyword Results">
      <!-- open ai api results -->
      <v-card-text class="text-capitalize">
        {{ formattedResults }}
      </v-card-text>
      <!-- actions -->
      <v-card-actions>
        <!-- copy to clipboard btn -->
        <!-- ui updates depending on resultsCopiedToClipboard -->
        <v-btn :color="btnColor" @click="copyResultsToClipboard">
          <v-icon start>{{ btnIcon }}</v-icon>
          Copy to Clipboard</v-btn
        >
        <v-spacer />
        <!-- close dialog btn -->
        <v-btn color="primary" @click="showResultsDialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
