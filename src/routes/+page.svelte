<script lang="ts">
  import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";

  import Searchbar from "../components/search-bar/Searchbar.svelte";
  import Home from "../components/page/Home.svelte";

  const queryClient = new QueryClient();
</script>

<Searchbar />

<QueryClientProvider client={queryClient}>
  <Home />
</QueryClientProvider>


