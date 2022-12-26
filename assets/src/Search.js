class JekyllSearch {
  constructor(dataSource, SearchField, resultsList, siteURL) {
    this.dataSource = dataSource
    this.SearchField = document.querySelector(SearchField)
    this.resultsList = document.querySelector(resultsList)
    this.siteURL = siteURL

    this.data = [];
  }

  fetchedData() {
    return fetch(this.dataSource, { mode: 'no-cors' })
      .then(blob => blob.json())
  }

  async findResults() {
    this.data = await this.fetchedData()
    const regex = new RegExp(this.SearchField.value, 'i')
    return this.data.filter(item => {
      return item.title.match(regex) || item.content.match(regex)
    })
  }

  async displayResults() {
    const results = await this.findResults()
    //console.log('this.siteURL = ',this.siteURL)

    const html = results.map(item => {
      //console.log(item)
      return `
          <li class="result">
              <article class="result__article  article">
                  <h4>
                    <a href="${item.url}">${item.title}</a>
                  </h4>
                  <p>${item.excerpt}</p>
              </article>
          </li>`
    }).join('')
    if ((results.length == 0) || (this.SearchField.value == '')) {
      this.resultsList.innerHTML = `<p>Sorry, nothing was found</p>`
    } else {
      this.resultsList.innerHTML = html
    }
  }

  // https://stackoverflow.com/questions/43431550/async-await-class-constructor
  init() {

    const url = new URL(document.location)
    if (url.searchParams.get("Search")) {
      this.SearchField.value = url.searchParams.get("Search")
      this.displayResults()
    }
    this.SearchField.addEventListener('keyup', () => {
      this.displayResults()
      // So that when going back in the browser we keep the Search
      url.searchParams.set("Search", this.SearchField.value)
      window.history.pushState('', '', url.href)
    })

    // to not send the form each time <enter> is pressed
    this.SearchField.addEventListener('keypress', event => {
      if (event.keyCode == 13) {
        event.preventDefault()
      }
    })
  }
}