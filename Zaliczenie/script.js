window.onload = function () {

    class Product {
        constructor(name, price, image) {
            this.name = name;
            this.price = price;
            this.image = image;
        }
    }

    let bKing = new Product('SUZUKI B-KING', 25000, "img/B-KING.jpg");
    let fazer = new Product('YAMAHA FZ8 FAZER', 17000, "img/FZ8FAZER.jpg");
    let gs500 = new Product('SUZUKI GS500F', 7000, "img/GS500F.jpg");
    let hayabusa = new Product('SUZUKI HAYABUSA', 25000, "img/HAYABUSA.jpg");
    let monster = new Product('DUCATI MONSTER', 50000, "img/MONSTER.jpg");
    let mt10 = new Product('YAMAHA MT-10', 35000, "img/MT-10.jpg");
    let multistrada = new Product('DUCATI M-STRADA', 45000, "img/MULTISTRADA.jpg");
    let s1000 = new Product('BMW S1000XR', 55000, "img/S1000XR.jpg");
    let sv = new Product('SUZUKI SV650S', 8000, "img/SV650S.jpg");
    let tiger = new Product('TRIUMPH TIGER', 40000, "img/TIGER900.jpg");
    let tracer = new Product('YAMAHA TRACER', 40000, "img/TRACER900.jpg");
    let z1000 = new Product('KAWASAKI Z1000SX', 40000, "img/Z1000SX.jpg");


    let productArray = [bKing, fazer, gs500, hayabusa, monster, mt10, multistrada, s1000, sv, tiger, tracer, z1000];


    for (let i = 0; i < productArray.length; i++) {

        let productBox = document.createElement("div");
        productBox.classList.add("productBox");
        productBox.id = "productBox" + i;
        document.getElementById("productsContainer").appendChild(productBox);

        let productImg = document.createElement("img");
        // productImg.id = "image" + i; //można wprowadzić na przyszłość dla ułatwienia dostępu do elementu
        productImg.alt = "IMAGE" + i;
        productBox.appendChild(productImg);
        productImg.src = productArray[i].image;

        let productName = document.createElement("div");
        productName.classList.add("productName");
        // productName.id = "name" + i; //można wprowadzić na przyszłość dla ułatwienia dostępu do elementu
        productBox.appendChild(productName);
        productName.innerHTML = '<b>' + productArray[i].name + '</b>';

        let productPrice = document.createElement("div");
        productPrice.classList.add("productPrice");
        // productPrice.id = "price" + i; //można wprowadzić na przyszłość dla ułatwienia dostępu do elementu
        productBox.appendChild(productPrice);
        productPrice.textContent = productArray[i].price + " zł";

        let addProductButton = document.createElement("button");
        addProductButton.classList.add("Add");
        addProductButton.id = "Add" + i;
        addProductButton.innerText = "Dodaj";
        productBox.appendChild(addProductButton);
    }


    let clickCounter = 0;
    let shoppingBoxContainer = document.getElementById("shoppingBoxContainer");
    let shoppingCartBox = document.getElementById("shopping-cart-box");
    let totalPrice = 0;

    let buyButton = document.createElement("button");
    buyButton.id = "buy";
    buyButton.innerText = "Kup";
    shoppingCartBox.appendChild(buyButton);

    let deleteButton = document.createElement("button");
    deleteButton.id = "delete";
    deleteButton.innerText = "Wyczyść";
    shoppingCartBox.appendChild(deleteButton);

    buyButton.addEventListener('click', function () {
        if(totalPrice === 0) {
            alert("Koszyk jest pusty");
        } else {
            alert("Dokonałeś zakupu. Cena produktów z koszyka to: " + totalPrice + "zł");
        }
    });

    let totalPriceField = document.createElement("div");
    totalPriceField.id = "totalPriceField";
    shoppingCartBox.appendChild(totalPriceField);
    totalPriceField.textContent = totalPrice +" zł";


    for (let i = 0; i < productArray.length; i++) {
        let addProductButtonFunctional= document.getElementById("Add" + i);
        addProductButtonFunctional.addEventListener('click', function () {
            if(clickCounter < 8) {
                totalPrice += productArray[i].price;
                clickCounter++;

                let shoppingBoxContainerForOneProduct = document.createElement("div");
                shoppingBoxContainerForOneProduct.classList.add("shoppingBoxContainerForOneProduct");
                shoppingBoxContainer.appendChild(shoppingBoxContainerForOneProduct);

                let shoppingBoxNameElement = document.createElement("div");
                shoppingBoxNameElement.innerText = productArray[i].name;
                shoppingBoxNameElement.classList.add("shoppingBoxName");

                let shoppingBoxPriceElement = document.createElement("div");
                shoppingBoxPriceElement.innerText = productArray[i].price + " zł";
                shoppingBoxPriceElement.classList.add("shoppingBoxPrice");

                let shoppingBoxButtonElement = document.createElement("button");
                shoppingBoxButtonElement.classList.add("shoppingBoxButton");
                shoppingBoxButtonElement.innerText = "Usuń";

                shoppingBoxContainerForOneProduct.appendChild(shoppingBoxNameElement);
                shoppingBoxContainerForOneProduct.appendChild(shoppingBoxButtonElement);
                shoppingBoxContainerForOneProduct.appendChild(shoppingBoxPriceElement);

                shoppingBoxButtonElement.addEventListener("click", function () {
                    deleteFromShoppingBox();
                });
                deleteButton.addEventListener("click", function (){
                    deleteFromShoppingBox();
                });
                totalPriceField.textContent = totalPrice +" zł";
                buyButton.addEventListener('click', function () {
                    if(totalPrice != 0) {
                        deleteFromShoppingBox();
                    }
                });

                function deleteFromShoppingBox() {
                    shoppingBoxContainerForOneProduct.removeChild(shoppingBoxNameElement);
                    shoppingBoxContainerForOneProduct.removeChild(shoppingBoxButtonElement);
                    shoppingBoxContainerForOneProduct.removeChild(shoppingBoxPriceElement);
                    shoppingBoxContainer.removeChild(shoppingBoxContainerForOneProduct);
                    clickCounter--;
                    totalPrice -= productArray[i].price;
                    totalPriceField.textContent = totalPrice +" zł";
                }
            }
            else {
                alert("Maksymalna liczba przedmiotów w koszyku");
            }
        });
    }
}