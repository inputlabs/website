class MIDB {
  constructor() {
    this.filterState = {
      name: '',
      tier: '',
      category: '',
      limit: 1000,
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
    const category = this.filterState.category

    const elements = document.querySelectorAll('.game')
    let count = 0
    elements.forEach(element => {
      const match = (
        (name === '' || element.id.includes(name)) &&
        (tier === '' || element.dataset.tier == tier) &&
        (category === '' || element.dataset.category == category)
      )
      const reachedLimit = count > this.filterState.limit
      element.style.display = match && !reachedLimit ? '' : 'none'
      if (match) count += 1
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
    window.history.replaceState({}, '', url)
  }

  getQueryString() {
    const url = new URL(window.location)
    const query = url.searchParams.get('game')

    const searchBar = document.getElementById('searchbar')
    if (searchBar && query) {
      searchBar.value = query
      this.setFilterName(query)
    }
  }

  toggleNotes(name) {
    const element = document.querySelector(`#${name} .notes`)
    if (element.style.display == '') element.style.display = 'none'
    else element.style.display = ''
    console.log(element, element.style.display)
  }
}

const midb = new MIDB()
