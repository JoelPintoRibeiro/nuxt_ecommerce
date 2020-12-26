<template>
  <div class="flex justify-center">
    <div class="max-w-screen-lg flex flex-col min-h-screen w-full">
      <NavBar />
      <div class="flex">
        <div v-for="link in links" :key="link.id" class="flex col">
          <nuxt-link :to="link.url">
            {{ link.label }}
          </nuxt-link>
        </div>
      </div>
      <Nuxt class="flex-grow" />
      <Footer />
    </div>
    <div id="snipcart" data-config-modal-style="side" data-api-key="MTUzM2IwMmEtNDMyZS00ODNlLTlmYWEtNzNlOTNkYTRkYjFjNjM3NDMzNzk0MTUzODA3ODY2" hidden />
  </div>
</template>
<script>

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import linksQuery from '~/apollo/queries/link/links'
export default {
  components: { Footer, NavBar },
  data () {
    return {
      links: []
    }
  },
  apollo: {
    links: {
      prefetch: true,
      query: linksQuery
    }
  }
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 20px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
