<script>
  import { useQuery } from "@sveltestack/svelte-query";
  import DisplayCard from "../cards/DisplayCard.svelte";

  const data = useQuery("blogJSON", () => {
    fetch("/api/v1/blogs").then((r) => r.json());
  });
</script>

{#if $data.isLoading}
  <div
    class="w-[12rem] h-[12rem] rounded-full border border-black flex items-center justify-center"
  >
    <div
      class="w-[6rem] h-[6rem] animate-ping bg-gray-300 rounded-full border border-black"
    ></div>
  </div>
{:else if $data.isError}
  <h1>Error faced on loading the blogs</h1>
{:else}
  <DisplayCard />
{/if}
