class ProductDatabase {
  constructor() {
    // Load existing product data from localStorage
    this.products = JSON.parse(localStorage.getItem('products')) || [];
  }

  add(product) {
    this.products.push(product);
    this.save()
  }

  findBy(key, value) {
    return this.products.filter(product => product[key] === value);
  }

  remove(product) {
    this.products = this.products
      .filter(p => !this.areEqual(p, product));

    this.save()
  }

  areEqual(product1, product2) {
    const keys1 = Object.keys(product1);
    const keys2 = Object.keys(product2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      if (product1[key] !== product2[key]) {
        return false;
      }
    }

    return true;
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