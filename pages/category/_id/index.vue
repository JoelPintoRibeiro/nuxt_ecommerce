<template>
  <div class="flex justify-center m-6">
    <div v-if="products !== null">
      <div v-for="p in products" :key="p.id" class="border rounded-lg bg-gray-100 hover:shadow-lg product-box">
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
            <div class="mt-1 text-sm text-gray-700">
              {{ p.price }} €
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
// import categoriesQuery from '~/apollo/queries/category/categories'
export default {
  async fetch ({ route, store, params }) {
    await store.dispatch('loadProductsByCategories',
      route.params.id
    )
  },
  data () {
    return {
      product: null,
      storeUrl: process.env.storeUrl
    }
  },
  // apollo: {
  //   products: {
  //     prefetch: true,
  //     query: categoriesQuery
  //   }
  // },
  computed: {
    products () {
      return this.$store.state.products
    },
    customFields () {
      return this.product.Custom_field
        .map(({ title, required, options }) => ({ name: title, required, options }))
        .map((x, index) => Object.entries(x)
          .map(([key, value]) => ({ [`data-item-custom${index + 1}-${key.toString().toLowerCase()}`]: value })))
        .reduce((acc, curr) => acc.concat(curr), [])
        .reduce((acc, curr) => ({ ...acc, ...curr }))
    }
  }
  // async created () {
  //   const res = await fetch(`https://joelstrapi.herokuapp.com/products/${this.$route.params.id}`)
  //   this.product = await res.json()
  // }
}
</script>
<style>
</style>
