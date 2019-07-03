class Product {

  constructor(name, price, year){
    this.name = name;
    this.price = price;
    this.year = year;
  }

}

class UI{
  addProduct(){

  }

  delateProduct(){

  }

  showMessage(){

  }
}

//DOM EVENTS
document.getElementById("product-form")
.addEventListener("submit", function(e){
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const year = document.getElementById("year").value;

  console.log(new Product(name, price, year));
  console.log(name, price, year);
  e.preventDefault();
});
