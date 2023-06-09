<script>
  import {Spinner} from 'flowbite-svelte'
  import {onDestroy, onMount} from 'svelte'
  import {fade} from 'svelte/transition'

  import {env} from '$env/dynamic/public'
  import {getDashboardPassword} from '$lib/api/http'
  import {sleep} from '$lib/utils/misc'

  export let accessToken

  let rfb
  let status = 'Loading'
  let attempt = 0
  const maxAttempts = 3
  let isMobileDevice = false

  const connect = async () => {
    try {
      const {default: RFB} = await import('@novnc/novnc/core/rfb')
      const {id, password} = await getDashboardPassword(accessToken)

      const url = `${env.PUBLIC_DASHBOARD_URL}/${id}`
      rfb = new RFB(document.getElementById('screen'), url, {
        credentials: {
          password: password,
        },
      })

      rfb.scaleViewport = 1

      rfb.addEventListener('connect', connectedToServer)
      rfb.addEventListener('disconnect', disconnectedFromServer)
    } catch (_error) {
      attempt += 1

      if (attempt >= maxAttempts) {
        status = 'Something went wrong, connection is closed'
        return
      }

      await sleep(3000)

      return connect()
    }
  }

  const connectedToServer = (_event) => {
    status = ''
  }

  const disconnectedFromServer = async (event) => {
    if (event.detail.clean) {
      status = 'Disconnected'
    } else {
      await sleep(3000)
      await connect()
    }
  }

  const manualDisconnect = () => {
    if (rfb) {
      rfb.disconnect()
    }
  }

  onMount(() => {
    isMobileDevice = /Mobi/i.test(window.navigator.userAgent) || screen.width < 1000

    if (!isMobileDevice) {
      connect()
    }
  })
  onDestroy(manualDisconnect)
</script>

<div
  id="screen"
  class="overflow-hidden relative m-2 p-2 md:w-2/3 h-full w-full hidden md:flex rounded-md border-2 justify-center items-center transition-colors"
>
  {#if status === 'Loading'}
    <div class="absolute place-self-center" transition:fade>
      <Spinner size={32} />
    </div>
  {:else if status}
    <h2 class="font-bold text-2xl absolute text-red-600" transition:fade>{status}</h2>
  {/if}
</div>
