<script>
    export let data;
    import BlogAdminCard from "../../../../components/cards/BlogAdminCard.svelte";
</script>

{#each data.blog as { alias }} 
    <div class="flex flex-wrap gap-10">
        <BlogAdminCard />
    </div>
{/each}