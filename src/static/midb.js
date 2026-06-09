class MIDB {
  constructor() {
    this.filterState = {
      name: '',
      tier: '',
      category: '',
    }
    this.getQueryString()
  }

  setFilterName(name) {
    this.filterState.name = name
    this.search()
  }

  setFilterTier(tier) {
    this.filterState.tier = tier
    this.search()
  }

  setFilterCategory(category) {
    this.filterState.category = category
    this.search()
  }

  search() {
    const name = this.filterState.name.toLowerCase().replace(' ', '-')
    const tier = this.filterState.tier

    const elements = document.querySelectorAll('.game')
    elements.forEach(element => {
      const match = (
        (name === '' || element.id.includes(name)) &&
        (tier === '' || element.dataset.tier == tier)
      )
      element.style.display = match ? '' : 'none'
    })

    if (name !== '') this.setQueryString(name)
    else this.setQueryString(null)
  }

  resetFilterName() {
    const searchBar = document.getElementById('searchbar')
    if (searchBar) searchBar.value = ''
    this.filterState.name = ''
    this.search()
  }

  setQueryString(query) {
    const url = new URL(window.location)
    if (query !== null) {
      url.searchParams.set('game', query)
    } else {
      url.searchParams.delete('game')
    }
    window.history.pushState({}, '', url)
  }

  getQueryString() {
    const url = new URL(window.location)
    const query = url.searchParams.get('game')

    const searchBar = document.getElementById('searchbar')
    if (searchBar && query) {
      searchBar.value = query
    }
  }
}

const midb = new MIDB()
