<template>
  <div class="grid main-app">
    <NavBar />
    <Header />
    <Nuxt />
    <Footer />
    <div id="snipcart" data-config-modal-style="side" data-api-key="MTUzM2IwMmEtNDMyZS00ODNlLTlmYWEtNzNlOTNkYTRkYjFjNjM3NDMzNzk0MTUzODA3ODY2" hidden />
  </div>
</template>
<script>
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
export default {
  components: { Footer, Header, NavBar }
}
</script>
<style lang="scss">
.main-app{
  grid-template-rows:  50px 200px 1fr 80px;
  grid-template-columns: 1fr;
  height:100vh
}
</style>
