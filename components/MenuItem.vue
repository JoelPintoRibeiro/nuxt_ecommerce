<template>
  <li :key="completeItem.id" class="menu-item hover:font-semibold">
    <nuxt-link v-if="completeItem.links_child && completeItem.links_child.length===0" :to="'category'+completeItem.url">
      {{ completeItem.label }}
    </nuxt-link>
    <span v-if="completeItem.links_child && completeItem.links_child.length>0" @click="childVisible=!childVisible">
      {{ completeItem.label }}
    </span>
    <ul v-if="completeItem.links_child && childVisible">
      <MenuItem
        v-for="sublink in completeItem.links_child"
        :key="sublink.id"
        class="bg-black text-white menu-item hover:font-semibold"
        :link="sublink"
        :links="links"
      />
    </ul>
  </li>
</template>
<script>
import MenuItem from '~/components/MenuItem'

export default {
  name: 'MenuItem',
  components: { MenuItem },
  props: {
    link: { type: Object, required: true },
    links: { type: Array, default: () => [] }
  },
  data () {
    return {
      childVisible: false
    }
  },
  computed: {
    completeItem () {
      return this.links.find(item => item.id === this.link.id)
    }
  }

}
</script>

  <style lang="scss">
.menu-item{
      display: block;
      float: left;
      overflow:visible;
      min-width: 75px;
      position: relative;
      text-decoration: none;
      ul{
        height: 100%;
        overflow:auto;
      }
    }
    .parent-item{
      width: 70px;
    overflow: visible;
    }
  </style>
