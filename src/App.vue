<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { supabase } from './stores/lib/superbaseClient'

</script>

<template>
<main>
  <RouterView/>
</main>

</template>