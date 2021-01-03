import linksQuery from '~/apollo/queries/link/links'
import productsByCategoriesQuery from '~/apollo/queries/product/productsByCategories'
export const state = () => ({
  links: [],
  products: []
})

export const mutations = {
  setLinks (state, payload) {
    state.links = payload
  },
  setProducts (state, payload) {
    state.products = payload
  }
}
export const getters = {
  getCategoryByLink: state => (link) => {
    // eslint-disable-next-line no-console
    console.log(state.links)
    // eslint-disable-next-line no-console
    console.log(link)
    return state.links.find(l => l.url === `/${link.id}`)
  }
}
export const actions = {
  async nuxtServerInit (store, context) {
    const { data } = await context.app.apolloProvider.defaultClient.query({ query: linksQuery })
    store.commit('setLinks', data.links)
  },
  async loadProductsByCategories ({ commit, getters }, payload) {
    const { data } = await this.app.apolloProvider.defaultClient.query({ query: productsByCategoriesQuery, variables: getters.getCategoryByLink(payload) })
    // eslint-disable-next-line no-console
    console.log('data:' + data)
    let allUsers = []
    data.categories.forEach(function (obj) {
      allUsers = allUsers.concat(obj.products)
    })
    commit('setProducts', allUsers)
  }
}
