<template>
  <div class="flex justify-center m-6">
    <div v-if="this.product !== null">
      <div class="flex flex-col items-center border rounded-lg bg-gray-100">
        <div class="w-full bg-white rounded-lg flex justify-center">
          <img :src="product.image" width="375">
        </div>
        <div class="w-full p-5 flex flex-col justify-between">
          <div>
            <h4 class="mt-1 font-semibold text-lg leading-tight truncate text-gray-700">
              {{ product.title }}
            </h4>
            <div class="mt-1 text-gray-600">
              {{ product.description }}
            </div>
          </div>
          <button
            class="snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow"
            :data-item-id="product.id"
            :data-item-price="product.price"
            :data-item-url="`https://joelstrapi.herokuapp.com${this.$route.fullPath}`"
            :data-item-description="product.description"
            :data-item-image="product.image"
            :data-item-name="product.title"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: null,
      storeUrl: process.env.storeUrl
    }
  },
  computed: {
    customFields () {
      return this.product.Custom_field
        .map(({ title, required, options }) => ({ name: title, required, options }))
        .map((x, index) => Object.entries(x)
          .map(([key, value]) => ({ [`data-item-custom${index + 1}-${key.toString().toLowerCase()}`]: value })))
        .reduce((acc, curr) => acc.concat(curr), [])
        .reduce((acc, curr) => ({ ...acc, ...curr }))
    }
  },
  async created () {
    const res = await fetch(`https://joelstrapi.herokuapp.com/products/${this.$route.params.id}`)
    this.product = await res.json()
  }
}
</script>
<style>
</style>
