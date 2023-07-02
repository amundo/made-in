import { ProductDatabase } from "./ProductDatabase.js"

let get = async (url) => {
  url = new URL(url, import.meta.url)
  try {
    let response = await fetch(new URL(url).href)
    if (!response.ok) {
      throw new Error('Network response was not OK')
    }
    let data = await response.json()
    return data
  } catch (error) {
    console.error('An error occurred:', error)
    throw error
  }
}


let categories = await get('./categories.json')
let countries = await get('./countries.json')
let products = await get('./products.json')

let database = { categories, countries, products }

export let loadData = () => {
  if (!localStorage.getItem('madeIn')) {
    localStorage.setItem('madeIn', JSON.stringify(database))
  }

  let productDatabase = new ProductDatabase({ products, countries, categories })
  return productDatabase
}


if(import.meta.main){
  console.log(import.meta.url)
  let database = loadData()
  console.log(database)
}