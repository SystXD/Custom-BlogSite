<script>
  import { useQuery } from "@sveltestack/svelte-query";
  import DisplayCard from "../cards/DisplayCard.svelte";
  import { Authentication } from '$lib/utils/config.json'
  import { onMount } from "svelte";

  let enabled = false;

  onMount(() => enabled = true)

  const data = useQuery("blogJSON", () => fetch('/api/v1/blogs', {
    headers: { "Authorization": Authentication.AuthHeader }
  }).then(res => res.json()), {
    enabled
  })
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
