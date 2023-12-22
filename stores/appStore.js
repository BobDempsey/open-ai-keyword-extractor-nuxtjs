export const useAppStore = defineStore("app", () => {
  // global app loading
  const loading = ref(false);

  // text to extract keywords
  const text = ref("");

  // show results modal
  const showResultsModal = ref(false);

  // results from open ai api
  const results = ref([]);

  // form submit handler to post to open ai api
  const onSubmit = async () => {
    console.log("submit");
    loading.value = true;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    loading.value = false;
  };

  return { loading, text, onSubmit, showResultsModal, results };
});
