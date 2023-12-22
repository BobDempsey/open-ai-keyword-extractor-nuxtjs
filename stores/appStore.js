export const useAppStore = defineStore("app", () => {
  // app title
  const appTitle = ref("Open AI Keyword Extractor - Chat GPT");

  // github repo url
  const githubRepoUrl = ref(
    "https://github.com/BobDempsey/open-ai-keyword-extractor-nuxtjs"
  );

  // portfolio url
  const portfolioUrl = ref("https://bobdempsey83.com/");

  // global app loading
  const loading = ref(false);

  // text to extract keywords
  const text = ref("");

  // results from open ai api
  const results = ref("");

  // show results modal
  const showResultsDialog = ref(false);

  // show snackbar
  const showSnackbar = ref(false);
  // snackbar message
  const snackbarMessage = ref("");
  // snackbar color
  const snackbarColor = ref("");

  // copy results to clipboard
  const copyResultsToClipboard = () => {
    try {
      // console.log("copyResultsToClipboard", results.value);
      navigator.clipboard.writeText(results.value);

      // set success snackbar
      showSnackbar.value = true;
      snackbarColor.value = "success";
      snackbarMessage.value = "Keywords copied to clipboard!";
    } catch (error) {
      console.log("copyResultsToClipboard", error);

      // set error snackbar
      showSnackbar.value = true;
      snackbarColor.value = "error";
      snackbarMessage.value = "Error copying keywords to clipboard!";
    }
  };

  // form submit handler to post to open ai api
  const onSubmit = async (form) => {
    // get form validation result
    const { valid } = await form.validate();

    // error if form not valid
    if (!valid) {
      // set error snackbar
      showSnackbar.value = true;
      snackbarColor.value = "error";
      snackbarMessage.value = "Please correct form errors";

      return;
    }

    loading.value = true;

    try {
      const { error, data } = await useLazyFetch("/api/openai/completions", {
        method: "POST",
        body: {
          content: text.value,
        },
      });

      const statusMessage = toRaw(error?.value?.statusMessage);

      if (statusMessage !== undefined) {
        // error toast here
        console.log("statusMessage", statusMessage);
        return;
      }

      const chatResponse = toRaw(data.value?.choices[0]?.message?.content);
      results.value = chatResponse;

      // set success snackbar
      showSnackbar.value = true;
      snackbarColor.value = "success";
      snackbarMessage.value = "Keywords received!";

      // show results dialog in ui
      showResultsDialog.value = true;
      // console.log("results", toRaw(results.value));
    } catch (error) {
      console.log("error", error);

      // set error snackbar
      showSnackbar.value = true;
      snackbarColor.value = "error";
      snackbarMessage.value = "Error receiving keywords!";
    } finally {
      loading.value = false;
    }
  };

  return {
    appTitle,
    githubRepoUrl,
    portfolioUrl,
    loading,
    text,
    showResultsDialog,
    results,
    onSubmit,
    copyResultsToClipboard,
    showSnackbar,
    snackbarMessage,
    snackbarColor,
  };
});
