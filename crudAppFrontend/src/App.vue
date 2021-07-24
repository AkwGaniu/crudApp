<template>
  <div id ="app">
    <div id="nav">
      <Header />
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "../src/components/layout/header"
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style scoped>

</style>