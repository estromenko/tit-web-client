<script>
  import {fade} from 'svelte/transition'

  import Dashboard from '$lib/components/Dashboard/Dashboard.svelte'
  import TutorialsViewer from '$lib/components/TutorialsViewer/TutorialsViewer.svelte'

  export let data
</script>

<div class="absolute w-full flex justify-between" transition:fade>
  <Dashboard accessToken={data.accessToken} />
  <TutorialsViewer accessToken={data.accessToken} />
</div>
