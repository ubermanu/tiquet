<script>
  import { Avatar } from '@skeletonlabs/skeleton'
  import { getUserAvatarUrl } from '$lib/pocketbase.js'

  export let data
</script>

<h1 class="text-3xl mb-4">{data?.user?.name}</h1>

<Avatar src={getUserAvatarUrl(data?.user)} width="w-32" />

<hr class="my-8" />

<!-- TODO: List the attached issues -->
