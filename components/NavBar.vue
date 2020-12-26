<template>
  <div class="flex justify-between px-8 bg-black">
    <nuxt-link to="/">
      <span class="emoji">
        🏠
      </span>
    </nuxt-link>

    <div class="flex">
      <button
        class="snipcart-customer-signin text-white pr-4"
      >
        My account
      </button>
      <button
        class="
        snipcart-checkout
        flex
        items-center"
      >
        <Cart />
        <span class="snipcart-total-price ml-3 font-semibold text-sm text-indigo-500" />
      </button>
    </div>
  </div>
</template>
<script>
import Cart from './icons/cart.vue'
export default {
  components: {
    Cart
  }
}
</script>
<style>
  .emoji {
    font-size: 30px;
  }
</style>
