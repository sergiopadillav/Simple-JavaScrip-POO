class Product {

  constructor(name, price, year){
    this.name = name;
    this.price = price;
    this.year = year;
  }

}

class UI{
  addProduct(product){
    const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name}
                    <strong>Price</strong>: ${product.price}
                    <strong>Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" Name="delete" >Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);

  }

  delateProduct(element){
    if(element.name === "delete"){
      element.parentElement.parentElement.parentElement.remove();
    }

  }

  showMessage(message,cssClass){
    const div = document.createElement("div");

    if(cssClass === "success"){
      div.className = `alert alert-${cssClass} mt-2`;
    } else {
      div.className = `alert alert-${cssClass} mt-2`;
    }

    div.appendChild(document.createTextNode(message));

    //DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#app");
    container.insertBefore(div,app)
    setTimeout(function(){
      document.querySelector(".alert").remove()
    },2500)


  }

  resetForm(){
    document.getElementById("product-form").reset();
  }
}

//DOM EVENTS

//CAPTURANDO EL EVENTO DEL INPUT PARA GUARDAR PRODUCTO
document.getElementById("product-form")
.addEventListener("submit", function(e){
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const year = document.getElementById("year").value;

  const product = new Product(name, price, year);

  const ui = new UI();

        if (name === '' || price === '' || year === '') {
            return ui.showMessage('Please Insert data in all fields!', 'danger');
        }

  ui.addProduct(product);
  ui.resetForm();
  ui.showMessage("Product Added Successfully!", "success")

  e.preventDefault();
});

// CAPTURANDO EL EVENTO DE ELIMINAR UN PRODUCTO Y MOSTRAR MENSAJE
document.getElementById("product-list").addEventListener("click", function(e){
  const ui = new UI();
  ui.delateProduct(e.target)
  ui.showMessage("Product Deleted Succsssfully", "info")
})
