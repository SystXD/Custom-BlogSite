<script>
    export let blogAlias = "Jhon Doe"
</script>

<div class="w-[28rem] md:w-[32rem] h-28 border border-blue-600">
  <a href="lol" class="inline-flex items-center ml-2 mt-8" role="button"
    ><i class="fa-solid text-2xl text-blue-600 fa-link"></i></a
  >
  <span class=" ml-20 text-center font-bold ">{blogAlias}</span>
  <div class="flex justify-center">
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >Edit Blog</button
    >
  </div>
</div>
