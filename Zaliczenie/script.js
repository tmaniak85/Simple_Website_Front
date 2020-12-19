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

    for (let i = 1; i < productArray.length + 1; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.id = "box" + i;
        document.getElementById("container").appendChild(box);
        let img = document.createElement("img");
        img.id = "image" + i;
        img.alt = "IMAGE" + i;
        document.getElementById("box" + i).appendChild(img);
        let name = document.createElement("div");
        name.classList.add("name");
        name.id = "name" + i;
        document.getElementById("box" + i).appendChild(name);
        let price = document.createElement("div");
        price.classList.add("price");
        price.id = "price" + i;
        document.getElementById("box" + i).appendChild(price);
        let buttonAdd = document.createElement("button");
        buttonAdd.classList.add("Add");
        buttonAdd.id = "Add" + i;
        buttonAdd.innerText = "Dodaj";
        document.getElementById("box" + i).appendChild(buttonAdd);
    }

    for (let i = 1; i < 13; i++) {
        document.getElementById("name" + i).innerHTML = '<b>' + productArray[i - 1].name + '</b>';
        document.getElementById("price" + i).textContent = productArray[i - 1].price + " zł";
        document.getElementById("image" + i).src = productArray[i - 1].image;
    }
    let clickcounter = 0;
    let shoppingBoxContainer = document.getElementById("shoppingBoxContainer");
    let buingPosition = 1;
    let totalPrice = 0;

    for (let i = 1; i < productArray.length + 1; i++) {
        let button = document.getElementById("Add" + i);
        button.addEventListener('click', function () {
            if(clickcounter < 6) {
                totalPrice += productArray[i - 1].price;
                clickcounter++;
                let nameElement = document.createElement("div");
                nameElement.innerText = productArray[i - 1].name;
                nameElement.classList.add("shoppingBoxName");
                nameElement.id = "nameElement" + buingPosition;
                let buttonElement = document.createElement("button");
                buttonElement.classList.add("shoppingBoxButton");
                buttonElement.innerText = "Usuń";
                buttonElement.id = "buttonElement" + buingPosition;
                let priceElement = document.createElement("div");
                priceElement.innerText = productArray[i - 1].price;
                priceElement.classList.add("shoppingBoxPrice");
                priceElement.id = "priceElement" + buingPosition;
                shoppingBoxContainer.appendChild(nameElement);
                shoppingBoxContainer.appendChild(buttonElement);
                shoppingBoxContainer.appendChild(priceElement);
                console.log('Clickcouter = ' + clickcounter);
                console.log('buingPosition = ' +buingPosition);
                console.log(totalPrice);
                buingPosition++;
                document.getElementById("totalPrice").textContent = totalPrice;
            }
            else {
                alert("Maksymalna liczba przedmiotów w koszyku");
            }
            var ii = 0;
            for (let j = 1; j < buingPosition + 1; j++) {

                let buttonElement = document.getElementById("buttonElement" + j);
                // console.log('buttonElement = ' + j + " = "  + buttonElement.id);

                if (buttonElement != null || ii > 0) {
                    buttonElement.addEventListener("click", function () {
                    let child1 = document.getElementById("nameElement" + j);
                    let child2 = document.getElementById("buttonElement" + j);
                    let child3 = document.getElementById("priceElement" + j);
                    //błędy są tutaj w konsoli. Elementy koszyka, które zostały usunięte są załatwione przez null, ale chyba iteruje przez pozostałe elementy, które są w koszyku zakupowym i przy nich wskazuje błędy
                    shoppingBoxContainer.removeChild(child1);
                    shoppingBoxContainer.removeChild(child2);
                    shoppingBoxContainer.removeChild(child3);
                    clickcounter = clickcounter - 1;
                    ii++;

                        console.log('buttonElement = ' + j + " = "  + buttonElement.id);
                    console.log('j = ' + j);
                        console.log('ii = ' + ii);
                    });
                } else {
                    console.log('źle?')
                };
            }
        });
    }
}