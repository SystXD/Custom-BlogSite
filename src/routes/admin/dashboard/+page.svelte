<script>
  import { page } from "$app/stores";
  import { signIn } from "@auth/sveltekit/client";

  import Cards from "../../../components/cards/Cards.svelte";
  import Navbar from "../../../components/navbar/Navbar.svelte";
  import Button from "../../../components/buttons/Button.svelte";
  import LoginModal from '../../../components/auth/LoginModal.svelte'
</script>

{#if $page.data.session}
  <Navbar AdminText={"Welcome SystXD"} linkFirst={"/admin/blogs"} />

  <div class="flex flex-wrap gap-2 items-center justify-center">
    <Cards icon='<i class="fa-solid fa-globe"></i>' />
    <Cards />
    <Cards />
  </div>

  <div class="flex justify-center mt-5">
    <Button buttonTitle="create blog" />
  </div>
{:else}
  <LoginModal />
{/if}
