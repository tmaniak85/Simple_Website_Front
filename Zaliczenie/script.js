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
        let img = document.createElement("img");
        // img.id = "image" + i;
        img.alt = "IMAGE" + i;
        productBox.appendChild(img);
        img.src = productArray[i].image;
        let name = document.createElement("div");
        name.classList.add("name");
        // name.id = "name" + i;
        productBox.appendChild(name);
        name.innerHTML = '<b>' + productArray[i].name + '</b>';
        let price = document.createElement("div");
        price.classList.add("price");
        // price.id = "price" + i;
        productBox.appendChild(price);
        price.textContent = productArray[i].price + " zł";
        let buttonAdd = document.createElement("button");
        buttonAdd.classList.add("Add");
        buttonAdd.id = "Add" + i;
        buttonAdd.innerText = "Dodaj";
        productBox.appendChild(buttonAdd);
    }

    let clickcounter = 0;
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
    totalPriceField.id = "totalPrice";
    shoppingCartBox.appendChild(totalPriceField);


    for (let i = 0; i < productArray.length; i++) {
        let addProductButton= document.getElementById("Add" + i);
        addProductButton.addEventListener('click', function () {
            if(clickcounter < 8) {
                totalPrice += productArray[i].price;
                clickcounter++;
                let shoppingBoxContainerForOneProduct = document.createElement("div");
                shoppingBoxContainerForOneProduct.classList.add("shoppingBoxContainerForOneProduct");
                shoppingBoxContainer.appendChild(shoppingBoxContainerForOneProduct);
                let nameElement = document.createElement("div");
                nameElement.innerText = productArray[i].name;
                nameElement.classList.add("shoppingBoxName");
                let priceElement = document.createElement("div");
                priceElement.innerText = productArray[i].price;
                priceElement.classList.add("shoppingBoxPrice");
                let buttonElement = document.createElement("button");
                buttonElement.classList.add("shoppingBoxButton");
                buttonElement.innerText = "Usuń";
                shoppingBoxContainerForOneProduct.appendChild(nameElement);
                shoppingBoxContainerForOneProduct.appendChild(buttonElement);
                shoppingBoxContainerForOneProduct.appendChild(priceElement);
                buttonElement.addEventListener("click", function () {
                    shoppingBoxContainerForOneProduct.removeChild(nameElement);
                    shoppingBoxContainerForOneProduct.removeChild(buttonElement);
                    shoppingBoxContainerForOneProduct.removeChild(priceElement);
                    shoppingBoxContainer.removeChild(shoppingBoxContainerForOneProduct);
                    clickcounter = clickcounter - 1;
                    totalPrice = totalPrice - productArray[i].price;
                    totalPriceField.textContent = totalPrice;
                });
                deleteButton.addEventListener("click", function (){
                    shoppingBoxContainerForOneProduct.removeChild(nameElement);
                    shoppingBoxContainerForOneProduct.removeChild(buttonElement);
                    shoppingBoxContainerForOneProduct.removeChild(priceElement);
                    shoppingBoxContainer.removeChild(shoppingBoxContainerForOneProduct);
                    clickcounter = clickcounter - 1;
                    totalPrice = totalPrice - productArray[i].price;
                    totalPriceField.textContent = totalPrice;
                });
                totalPriceField.textContent = totalPrice;
                buyButton.addEventListener('click', function () {
                    if(totalPrice != 0) {
                        shoppingBoxContainerForOneProduct.removeChild(nameElement);
                        shoppingBoxContainerForOneProduct.removeChild(buttonElement);
                        shoppingBoxContainerForOneProduct.removeChild(priceElement);
                        shoppingBoxContainer.removeChild(shoppingBoxContainerForOneProduct);
                        clickcounter = clickcounter - 1;
                        totalPrice = totalPrice - productArray[i].price;
                        totalPriceField.textContent = totalPrice;
                    }
                });
            }
            else {
                alert("Maksymalna liczba przedmiotów w koszyku");
            }
        });
    }


}

    //dodać odejmowanie od ceny końcowej cenę usuniętego przedmiotu z koszyka