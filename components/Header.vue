<template>
  <div class="grid header-section">
    <div class="flex items-center justify-center">
      <img class="logo img-responsive" src="https://laboutiquewebdesanimaux.com/wp-content/uploads/2019/01/Logo-BWA.jpg" alt="Tibo Inshape" width="150" height="80">
    </div>

    <div class="flex justify-center">
      <nav role="navigation">
        <ul class="dropdown-menu">
          <MenuItem v-for="link in filteredLinks" :key="link.id" :link="link" :links="links" class="menu-item hover:font-semibold" />
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>

import linksQuery from '~/apollo/queries/link/links'
import MenuItem from '~/components/MenuItem'
export default {
  components: { MenuItem },

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
  }

  </style>
