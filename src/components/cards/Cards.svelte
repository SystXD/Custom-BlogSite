<script>
    export let Title= 92
    export let icon= '<i class="fa-solid fa-globe"></i>'
</script>


<div class="flex space-x-5 items-center justify-center gap-10 mt-10 flex-wrap">
    <div class="transform rounded-xl h-52 w-52  border-double border-4 border-gray-300 sm:w-64 bg-gray-100 shadow-xl transition duration-300 hover:scale-105">
        <div class="flex h-full justify-center items-center flex-col">
            <h1 class="font-extrabold text-4xl text-black">{@html  icon}</h1>
            <span class="font-bold text-black text-2xl mt-5 features">{Title}</span>
        </div>
    </div>

 
</div>

<style>
    .features {
        font-family: "Baloo Da 2", sans-serif;
    }
</style>