class ProductDatabase {
  constructor() {
    // Load existing product data from localStorage
    this.products = JSON.parse(localStorage.getItem('products')) || [];
  }

  add(product) {
    this.products.push(product);
  }

  findBy(key, value) {
    return this.products.filter(product => product[key] === value);
  }

  remove(product) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  save() {
    // Save updated product data to localStorage
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  export() {
    // Return a deep copy of the product data
    return JSON.parse(JSON.stringify(this.products));
  }
}

export {ProductDatabase}