class CategoryGrid extends HTMLElement {
  #categories = []

  constructor(){
    super()
    this.innerHTML = `<form></form>`
    this.listen()
  }

  async fetch(url){
    let response = await fetch(url)
    let data = await response.json()
    this.data = data
  }

  connectedCallback(){

  }

  static get observedAttributes(){
    return ["src"]
  }

  attributeChangedCallback(attribute, oldValue, newValue){
    if(attribute == "src"){
      this.fetch(newValue)
    }
  }

  set data(categories){
    this.#categories = categories
    this.#categories
      .sort((a,b) => a.name.localeCompare(b.name))
    this.render()
  }

  get data(){
    return this.#categories
  }

  render(){
    this.#categories.forEach(category => {
      let button = document.createElement('button')
      button.classList.add('category')
      button.dataset.category = category.id
      button.innerHTML = `
        <strong>${category.name}</strong>
        <div class=emoji>${category.emoji}</div>

      `
      this.querySelector('form').append(button)
    })
  }

  listen(){
    this.querySelector('form').addEventListener('submit', submitEvent => {
      submitEvent.preventDefault()
    })
  }
}

export {CategoryGrid}
customElements.define('category-grid', CategoryGrid)
