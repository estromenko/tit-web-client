<script lang="ts">
  export let title: string
</script>

<div
  class="transition-all w-full rounded-lg overflow-hidden border-2 border-blue-600 shadow-lg mb-5"
>
  <h2 class="p-4 pl-4 bg-blue-600 text-white">
    {title}
  </h2>
  <div class="p-4">
    <slot />
  </div>
</div>
