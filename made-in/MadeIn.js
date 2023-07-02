import {ProductList} from '../product-list/ProductList.js'
import {AddProduct} from '../add-product/AddProduct.js'

class MadeIn extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `
    <product-list></product-list>
    <add-product> </add-product>
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

  render(){
    // edit .innerHTML here
  }

  listen(){
    /* write event listeners here */
  }
}

export {MadeIn}
customElements.define('made-in', MadeIn)
