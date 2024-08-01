<script>

  import Cards from "../../../components/cards/Cards.svelte";
  import Button from "../../../components/buttons/Button.svelte";
</script>


  <div class="flex flex-wrap gap-2 items-center justify-center">
    <Cards icon='<i class="fa-solid fa-globe"></i>' />
    <Cards />
    <Cards />
  </div>

  <div class="flex justify-center mt-5">
    <Button buttonTitle="create blog" />
  </div>
