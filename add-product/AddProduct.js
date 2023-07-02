import {CountryMap} from '../country-map/CountryMap.js'
import {ChooseCountry} from '../choose-country/ChooseCountry.js'
import {CategoryGrid} from '../category-grid/CategoryGrid.js'

class AddProduct extends HTMLElement {
  constructor(){
    super()

    this.innerHTML = `
  <section>
    <h2>What?</h2>
    <p>What did you find?</p>
    <input type="text" name="what" placeholder="What did you find?">
  </section>

  <section>
    <h2>Where?</h2>
    <p>What country was it made in?</p>
    <country-map></country-map>
    <choose-country></choose-country>
  </section>

  <section>
    <h2>What kind?</h2>    
    <p>Let’s pick a category for your <span class=product-name>spoon</span>.</p>
    <category-grid src="../categories.json"></category-grid>
  </section>

  <section>
    <h2><button>Save</button></h2>
  </section>
    `
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

  /*
  set data(data){
    this.whatever = data.whatever
    this.metadata = data.metadata
    this.render()
  }

  get data(){
    return {
      whatever: this.whatever,
      metadata: this.metadata
    }
  }
  */

  render(){
    // edit .innerHTML here
  }

  listen(){
    /* write event listeners here */
  }
}

export {AddProduct}
customElements.define('add-product', AddProduct)
