<script>
  import Dashboard from '$lib/components/Dashboard/Dashboard.svelte'
  import TutorialsViewer from '$lib/components/TutorialsViewer/TutorialsViewer.svelte'

  export let data
</script>

<div class="flex justify-between">
  <Dashboard accessToken={data.accessToken} />
  <TutorialsViewer accessToken={data.accessToken} />
</div>
