<script>
  import RFB from '@novnc/novnc/core/rfb'
  import {onMount} from 'svelte'

  import {getVncPort} from '$lib/api/http'
  import {sleep} from '$lib/utils/misc'

  export let data

  let status = 'Loading'
  let attempt = 0
  const maxAttempts = 3

  const connect = async () => {
    try {
      const {port, password} = await getVncPort(data.accessToken)

      const url = `ws://localhost:${port}`
      const rfb = new RFB(document.getElementById('screen'), url, {
        credentials: {
          password: password,
        },
      })

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

  onMount(connect)
</script>

<div
  id="screen"
  class="m-2 p-2 h-[80vh] rounded-md border-2 flex justify-center items-center transition-colors"
>
  <h2 class="font-bold text-3xl absolute">{status}</h2>
</div>
