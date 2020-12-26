<template>
  <div class="grid header-section">
    <div class="flex items-center justify-center">
      <img class="logo img-responsive" src="https://tiboinshape.com/shop/img/tibo-inshape-1529505744.jpg" alt="Tibo Inshape" width="150" height="80">
    </div>

    <div class="flex justify-center">
      <nav role="navigation">
        <ul class="dropdown-menu">
          <li v-for="link in filteredLinks" :key="link.id" class="menu-item hover:font-semibold">
            <nuxt-link :to="link.url">
              {{ link.label }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>

import linksQuery from '~/apollo/queries/link/links'
export default {
  data () {
    return {
      links: []
    }
  },
  computed: {
    filteredLinks () {
      return this.links.filter(link => !link.link_parent)
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

  <style lang="scss">
  .header-section{
    grid-template-rows: 100px 100px;
    grid-template-columns: 1fr;
  }
  .product-box{
    height: 150px;
  }
  .dropdown-menu{
      list-style: none;
      margin: 0;
      padding-left: 0;
  .menu-item{
      color:rgb(0, 0, 0);
      display: block;
      float: left;
      padding: 1rem;
      position: relative;
      text-decoration: none;
    }
  }

  </style>
