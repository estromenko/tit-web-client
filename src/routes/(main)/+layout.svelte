<script lang="ts">
  import {getContext} from 'svelte'

  import Header from '$lib/components/Header/Header.svelte'
  import type {User} from '$lib/types'

  const user = getContext<User | undefined>('user')
</script>

<Header {user} />

<slot />
