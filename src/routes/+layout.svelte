<script lang="ts">
  import '../app.css'
  import 'bytemd/dist/index.css'
  import 'github-markdown-css/github-markdown-light.css'
  import 'highlight.js/styles/default.css'

  import {setContext} from 'svelte'
  import {writable} from 'svelte/store'

  import type {User} from '$lib/types'

  import type {LayoutData} from './$types'

  export let data: LayoutData

  const user = writable<User | undefined>(undefined)
  $: user.set(data.user)

  setContext('user', user)
</script>

<slot />
