<template>
  <v-container>
    <v-row>
      <!-- form card -->
      <v-col cols="12" md="10" offset-md="1" lg="8" offset-lg="2">
        <FormCard />
      </v-col>

      <!-- about this app card -->
      <v-col cols="12" md="10" offset-md="1" lg="8" offset-lg="2">
        <AboutAppCard />
      </v-col>
    </v-row>
  </v-container>

  <!-- results dialog -->
  <ResultsDialog />

  <!-- snackbar -->
  <Snackbar />

  <!-- footer -->
  <Footer />
</template>
