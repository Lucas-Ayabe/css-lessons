<template>
  <div id="app">
    <TheHeader fixed />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'

export default {
  name: 'Default',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
