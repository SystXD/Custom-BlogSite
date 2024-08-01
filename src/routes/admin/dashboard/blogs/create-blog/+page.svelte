<script>
    import { page } from "$app/stores";

  </script>
  
  <div class="flex items-center justify-center mt-6">
    <div class="relative w-[16rem] md:w-[32rem] h-16 rounded-2xl border border-blue-600 flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="text-center font-bold">Total Blogs: 23</h1>
      </div>
      <img
        src={$page.data.session?.user?.image}
        alt=""
        class="max-w-full mr-[28rem] inline border border-yellow-300 max-h-full object-contain rounded-full"
      />
    </div>
  </div>
