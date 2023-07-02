import {ProductDatabase} from "./ProductDatabase.js"
import {loadData} from './load-data.js'


let database = loadData()

class ProductList extends HTMLElement {
  constructor(){
    super()
    this.productDatabase = new ProductDatabase(database)
    this.innerHTML = ` <table> </table> `
    this.render()
    this.listen()
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

  get data(){
    return this.productDatabase
  }

  add(product){
    this.productDatabase.add(product)
    this.render()
  }

  render(){
    let table = this.querySelector('table')
    table.innerHTML = `
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Country</th>
      </tr>
    `
    this.data.products.forEach(product => {
      let tr = document.createElement("tr")
      tr.classList.add("product")
      tr.innerHTML = `
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>${product.countries.join(", ")}</td>
        `
      table
        .append(tr)
    })
  }

  listen(){
    /* write event listeners here */
  }
}

export {ProductList}
customElements.define('product-list', ProductList)
