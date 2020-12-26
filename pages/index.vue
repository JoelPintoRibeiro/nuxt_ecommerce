<template>
  <div>
    <a href="#" class="snipcart-user-profile">
      <span class="snipcart-user-email">Login</span>
    </a>
    <a href="#" class="snipcart-user-profile">
      User profile
    </a>
    <a href="#" class="snipcart-user-logout">
      Logout
    </a>
    <div class="snipcart-summary" />
    <div class="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      <div v-for="p in products" :key="p.id" class="border rounded-lg bg-gray-100 hover:shadow-lg">
        <nuxt-link :to="`/products/${p.id}`">
          <div class="rounded-t-lg bg-white pt-2 pb-2">
            <img class="crop mx-auto" :src="p.image">
          </div>
          <div class="pl-4 pr-4 pb-4 pt-4 rounded-lg">
            <h4 class="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
              {{ p.title }}
            </h4>
            <div class="mt-1 text-sm text-gray-700">
              {{ p.description }}
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>

import productsQuery from '~/apollo/queries/product/products'
export default {
  data () {
    return {
      products: []
    }
  },
  apollo: {
    products: {
      prefetch: true,
      query: productsQuery
    }
  }
}
</script>

  <style>
    /* Sample `apply` at-rules with Tailwind CSS
    .container {
    @apply min-h-screen flex justify-center items-center text-center mx-auto;
    }
    */
    .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    }

    .title {
    font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
    }

    .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
    }

    .links {
    padding-top: 15px;
    }
  </style>
</template>
