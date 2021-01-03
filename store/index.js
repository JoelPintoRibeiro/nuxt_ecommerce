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
  getCategoriesIdByLink: state => (urlSlug) => {
    const link = state.links.find(l => l.url === `/${urlSlug}`)
    if (link) {
      return link.categories.map(c => c.code)
    }
    return []
  }
}
export const actions = {
  async nuxtServerInit (store, context) {
    const { data } = await context.app.apolloProvider.defaultClient.query({ query: linksQuery })
    store.commit('setLinks', data.links)
  },
  async loadProductsByCategories ({ commit, getters }, payload) {
    const categoriesId = getters.getCategoriesIdByLink(payload)

    const { data } = await this.app.apolloProvider.defaultClient.query({ query: productsByCategoriesQuery, variables: { categoriesId } })

    let allProducts = []
    data.categories.forEach(function (obj) {
      allProducts = allProducts.concat(obj.products)
    })
    const foo = new Map()
    for (const product of allProducts) {
      foo.set(product.id, product)
    }
    const distinctProducts = [...foo.values()]

    commit('setProducts', distinctProducts)
  }
}
