<script>

  import { browser } from '$app/environment';
  import { loading } from '$lib/utils/stores/loading';
  
  import '../app.css'
  import Loader from '../components/loader/Loader.svelte';

  $: if (browser) loading.set(false)

</script>

{#if $loading} <Loader /> {/if}

<slot />