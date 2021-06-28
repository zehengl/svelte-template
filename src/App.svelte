<script>
  export let name;
  export let version;
</script>

<div class="flex flex-col h-screen justify-between">
  <main class="mb-auto">
    <h1 class="text-5xl text-center text-indigo-700 py-8">Hello {name}!</h1>
    <p class="text-2xl text-center py-2">
      Visit the
      <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
      to learn how to build Svelte apps.
    </p>
  </main>
  <footer class="h-10 bg-gray-300">
    <p class="text-center">Version: {version}</p>
  </footer>
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
