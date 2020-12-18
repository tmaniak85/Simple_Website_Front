window.onload = function () {

    class Product {
        constructor(name, price, image) {
            this.name = name;
            this.price = price;
            this.image = image;
        }
    }

    var bKing = new Product('SUZUKI B-KING', 25000, "img/B-KING.jpg");
    var fazer = new Product('YAMAHA FZ8 FAZER', 17000, "img/FZ8FAZER.jpg");
    var gs500 = new Product('SUZUKI GS500F', 7000, "img/GS500F.jpg");
    var hayabusa = new Product('SUZUKI HAYABUSA', 25000, "img/HAYABUSA.jpg");
    var monster = new Product('DUCATI MONSTER', 50000, "img/MONSTER.jpg");
    var mt10 = new Product('YAMAHA MT-10', 35000, "img/MT-10.jpg");
    var multistrada = new Product('DUCATI M-STRADA', 45000, "img/MULTISTRADA.jpg");
    var s1000 = new Product('BMW S1000XR', 55000, "img/S1000XR.jpg");
    var sv = new Product('SUZUKI SV650S', 8000, "img/SV650S.jpg");
    var tiger = new Product('TRIUMPH TIGER', 40000, "img/TIGER900.jpg");
    var tracer = new Product('YAMAHA TRACER', 40000, "img/TRACER900.jpg");
    var z1000 = new Product('KAWASAKI Z1000SX', 40000, "img/Z1000SX.jpg");

    var productArray = [bKing, fazer, gs500, hayabusa, monster, mt10, multistrada, s1000, sv, tiger, tracer, z1000];

    for (let i = 1; i < productArray.length + 1; i++) {
        var box = document.createElement("div");
        box.classList.add("box");
        box.id = "box" + i;
        document.getElementById("container").appendChild(box);
        var img = document.createElement("img");
        img.id = "image" + i;
        img.alt = "IMAGE" + i;
        document.getElementById("box" + i).appendChild(img);
        var name = document.createElement("div");
        name.classList.add("name");
        name.id = "name" + i;
        document.getElementById("box" + i).appendChild(name);
        var price = document.createElement("div");
        price.classList.add("price");
        price.id = "price" + i;
        document.getElementById("box" + i).appendChild(price);
        var button = document.createElement("button");
        button.classList.add("Add");
        button.id = "Add" + i;
        button.innerText = "Dodaj";
        document.getElementById("box" + i).appendChild(button);
    }

    for (let i = 1; i < 13; i++) {
        document.getElementById("name" + i).innerHTML = "<b>" + productArray[i - 1].name + "</b>";
        document.getElementById("price" + i).textContent = productArray[i - 1].price + " zł";
        document.getElementById("image" + i).src = productArray[i - 1].image;
    }
    var clickcounter = 0;
    var totalPrice = 0;
    var shoppingBoxContainer = document.getElementById("shoppingBoxContainer");

    for (let i = 1; i < productArray.length + 1; i++) {
        var button = document.getElementById("Add" + i);
        button.addEventListener('click', function () {
            if(clickcounter < 6) {
                totalPrice += productArray[i - 1].price;
                clickcounter = clickcounter + 1;
                var nameElement = document.createElement("div");
                nameElement.innerText = productArray[i - 1].name;
                nameElement.classList.add("shoppingBoxName");
                nameElement.id = "nameElement" + clickcounter;
                var buttonElement = document.createElement("button");
                buttonElement.classList.add("shoppingBoxButton");
                buttonElement.innerText = "Usuń";
                buttonElement.id = "buttonElement" + clickcounter;
                var priceElement = document.createElement("div");
                priceElement.innerText = productArray[i - 1].price;
                priceElement.classList.add("shoppingBoxPrice");
                priceElement.id = "priceElement" + clickcounter;
                shoppingBoxContainer.appendChild(nameElement);
                shoppingBoxContainer.appendChild(buttonElement);
                shoppingBoxContainer.appendChild(priceElement);
                document.getElementById("totalPrice").textContent = totalPrice;
            } else {
                alert("Maksymalna liczba przedmiotów w koszyku");
            }
        });
    }
    //clickcounter określa maksymalną liczbę przedmiotów w koszyku
    //nie wiem dlaczego poniższy kod nie działa. na skutek dodania przedmiotu do koszyka tworzą się trzy pola w menu bocznym (nazwa, przycisk usuń i cena). Tym nowo powstałym przycikiem chcę usunąć pola nazwa i cena.
    if (clickcounter !== 0) {
        var buttonElement1 = document.getElementById("buttonElement1");
        var child = document.getElementById("priceElement1");
        var parent = document.getElementById("shoppingBoxContainer");
        buttonElement1.addEventListener("click", function() {
            parent.remove(child);
        });
    }


    // buttonDelete.addEventListener('click', function(){
    //    var child1 = document.getElementsByClassName("shoppingBoxName");
    //    var child2 = document.getElementsByClassName("shoppingBoxPrice");
    //    var parent = document.getElementById("shoppingBoxContainer");
    //    parent.removeChild(child1);
    //    parent.removeChild(child2);
    // });


}