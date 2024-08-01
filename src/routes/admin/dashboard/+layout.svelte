<script>
    import { page } from '$app/stores'
    import Navbar from '../../../components/navbar/Navbar.svelte'
    import LoginModal from '../../../components/auth/LoginModal.svelte'
</script>

{#if $page.data.session}
<Navbar AdminText={"Welcome SystXD"} linkFirst={"/admin/blogs"} />
{:else}
    <LoginModal />
{/if} 

<slot />