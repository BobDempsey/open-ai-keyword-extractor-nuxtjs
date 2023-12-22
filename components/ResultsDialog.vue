<script setup>
// pinia => useAppStore() && storeToRefs() auto imported by nuxt

// pinia appStore
const appStore = useAppStore();
const { showResultsDialog, results } = storeToRefs(appStore);

// copyResultsToClipboard function cannot be destructured from app store
const copyResultsToClipboard = appStore.copyResultsToClipboard;
</script>

<template>
  <v-dialog v-model="showResultsDialog" width="500px">
    <v-card title="Open AI Keyword Results">
      <!-- open ai api results -->
      <v-card-text>
        {{ results }}
      </v-card-text>
      <!-- actions -->
      <v-card-actions>
        <!-- copy to clipboard btn -->
        <v-btn color="primary" @click="copyResultsToClipboard">
          <v-icon start>mdi-clipboard-outline</v-icon>
          Copy to Clipboard</v-btn
        >
        <v-spacer />
        <!-- close dialog btn -->
        <v-btn color="primary" @click="showResultsDialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
