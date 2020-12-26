<template>
  <li :key="completeItem.id" class="menu-item hover:font-semibold" >
    <nuxt-link v-if="completeItem.links_child && completeItem.links_child.lenght===0" :to="completeItem.url">
      {{ completeItem.label }}
    </nuxt-link>
    <v-else @click="childVisible=!childVisible">
      {{ completeItem.label }}
    </v-else>
    <ul v-if="completeItem.links_child && childVisible">
      <MenuItem v-for="sublink in completeItem.links_child" :key="sublink.id" :link="sublink" :links="links" class="menu-item hover:font-semibold" />
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
      color:rgb(0, 0, 0);
      display: block;
      float: left;
      padding: 1rem;
      position: relative;
      text-decoration: none;
    }
  </style>
