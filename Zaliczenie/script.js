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

    var button1 = document.getElementById("Add1");
    var button2 = document.getElementById("Add2");
    var button3 = document.getElementById("Add3");
    var button4 = document.getElementById("Add4");
    var button5 = document.getElementById("Add5");
    var button6 = document.getElementById("Add6");
    var button7 = document.getElementById("Add7");
    var button8 = document.getElementById("Add8");
    var button9 = document.getElementById("Add9");
    var button10 = document.getElementById("Add10");
    var button11 = document.getElementById("Add11");
    var button12 = document.getElementById("Add12");

    var totalPrice = 0;
    var shoppingBoxContainer = document.getElementById("shoppingBoxContainer");

    button1.addEventListener('click', function(){
        totalPrice+= productArray[0].price;
        var newElement = document.createElement("div");
        newElement.innerText = productArray[0].name;
        newElement.classList.add("shoppingBoxName");
        var newElement2 = document.createElement("div");
        newElement2.innerText = productArray[0].price;
        newElement2.classList.add("shoppingBoxPrice");
        var newElement3 = document.createElement("button");
        newElement3.classList.add("shoppingBoxButton");
        newElement3.innerText = "Usuń";
        shoppingBoxContainer.appendChild(newElement);
        shoppingBoxContainer.appendChild(newElement2);
        shoppingBoxContainer.appendChild(newElement3);
        document.getElementById("totalPrice").textContent = totalPrice;
    });
    button2.addEventListener('click', function(){
        totalPrice+= productArray[1].price;
        var newElement = document.createElement("div");
        newElement.innerText = productArray[1].name;
        newElement.classList.add("shoppingBoxName");
        var newElement2 = document.createElement("div");
        newElement2.innerText = productArray[1].price;
        newElement2.classList.add("shoppingBoxPrice");
        var newElement3 = document.createElement("button");
        newElement3.classList.add("shoppingBoxButton");
        newElement3.innerText = "Usuń";
        shoppingBoxContainer.appendChild(newElement);
        shoppingBoxContainer.appendChild(newElement2);
        shoppingBoxContainer.appendChild(newElement3);
        document.getElementById("totalPrice").textContent = totalPrice;
    });
    button3.addEventListener('click', function(){
        totalPrice+= productArray[2].price;
        var newElement = document.createElement("div");
        newElement.innerText = productArray[2].name;
        newElement.classList.add("shoppingBoxName");
        var newElement2 = document.createElement("div");
        newElement2.innerText = productArray[2].price;
        newElement2.classList.add("shoppingBoxPrice");
        var newElement3 = document.createElement("button");
        newElement3.classList.add("shoppingBoxButton");
        newElement3.innerText = "Usuń";
        shoppingBoxContainer.appendChild(newElement);
        shoppingBoxContainer.appendChild(newElement2);
        shoppingBoxContainer.appendChild(newElement3);
        document.getElementById("totalPrice").textContent = totalPrice;
    });
    button4.addEventListener('click', function(){
        totalPrice+= productArray[3].price;
        var newElement = document.createElement("div");
        newElement.innerText = productArray[3].name;
        newElement.classList.add("shoppingBoxName");
        var newElement2 = document.createElement("div");
        newElement2.innerText = productArray[3].price;
        newElement2.classList.add("shoppingBoxPrice");
        var newElement3 = document.createElement("button");
        newElement3.classList.add("shoppingBoxButton");
        newElement3.innerText = "Usuń";
        shoppingBoxContainer.appendChild(newElement);
        shoppingBoxContainer.appendChild(newElement2);
        shoppingBoxContainer.appendChild(newElement3);
        document.getElementById("totalPrice").textContent = totalPrice;
    });
    button5.addEventListener('click', function(){
        totalPrice+= productArray[4].price;
        var newElement = document.createElement("div");
        newElement.innerText = productArray[4].name;
        newElement.classList.add("shoppingBoxName");
        var newElement2 = document.createElement("div");
        newElement2.innerText = productArray[4].price;
        newElement2.classList.add("shoppingBoxPrice");
        var newElement3 = document.createElement("button");
        newElement3.classList.add("shoppingBoxButton");
        newElement3.innerText = "Usuń";
        shoppingBoxContainer.appendChild(newElement);
        shoppingBoxContainer.appendChild(newElement2);
        shoppingBoxContainer.appendChild(newElement3);
        document.getElementById("totalPrice").textContent = totalPrice;
    });
    button6.addEventListener('click', function(){
        totalPrice+= productArray[5].price;
        var newElement = document.createElement("div");
        newElement.innerText = productArray[5].name;
        newElement.classList.add("shoppingBoxName");
        var newElement2 = document.createElement("div");
        newElement2.innerText = productArray[5].price;
        newElement2.classList.add("shoppingBoxPrice");
        var newElement3 = document.createElement("button");
        newElement3.classList.add("shoppingBoxButton");
        newElement3.innerText = "Usuń";
        shoppingBoxContainer.appendChild(newElement);
        shoppingBoxContainer.appendChild(newElement2);
        shoppingBoxContainer.appendChild(newElement3);
        document.getElementById("totalPrice").textContent = totalPrice;
    });
    button7.addEventListener('click', function(){
        totalPrice+= productArray[6].price;
        var newElement = document.createElement("div");
        newElement.innerText = productArray[6].name;
        newElement.classList.add("shoppingBoxName");
        var newElement2 = document.createElement("div");
        newElement2.innerText = productArray[6].price;
        newElement2.classList.add("shoppingBoxPrice");
        var newElement3 = document.createElement("button");
        newElement3.classList.add("shoppingBoxButton");
        newElement3.innerText = "Usuń";
        shoppingBoxContainer.appendChild(newElement);
        shoppingBoxContainer.appendChild(newElement2);
        shoppingBoxContainer.appendChild(newElement3);
        document.getElementById("totalPrice").textContent = totalPrice;
    });
    button8.addEventListener('click', function(){
        totalPrice+= productArray[7].price;
        var newElement = document.createElement("div");
        newElement.innerText = productArray[7].name;
        newElement.classList.add("shoppingBoxName");
        var newElement2 = document.createElement("div");
        newElement2.innerText = productArray[7].price;
        newElement2.classList.add("shoppingBoxPrice");
        var newElement3 = document.createElement("button");
        newElement3.classList.add("shoppingBoxButton");
        newElement3.innerText = "Usuń";
        shoppingBoxContainer.appendChild(newElement);
        shoppingBoxContainer.appendChild(newElement2);
        shoppingBoxContainer.appendChild(newElement3);
        document.getElementById("totalPrice").textContent = totalPrice;
    });
    button9.addEventListener('click', function(){
        totalPrice+= productArray[8].price;
        var newElement = document.createElement("div");
        newElement.innerText = productArray[8].name;
        newElement.classList.add("shoppingBoxName");
        var newElement2 = document.createElement("div");
        newElement2.innerText = productArray[8].price;
        newElement2.classList.add("shoppingBoxPrice");
        var newElement3 = document.createElement("button");
        newElement3.classList.add("shoppingBoxButton");
        newElement3.innerText = "Usuń";
        shoppingBoxContainer.appendChild(newElement);
        shoppingBoxContainer.appendChild(newElement2);
        shoppingBoxContainer.appendChild(newElement3);
        document.getElementById("totalPrice").textContent = totalPrice;
    });
    button10.addEventListener('click', function(){
        totalPrice+= productArray[9].price;
        var newElement = document.createElement("div");
        newElement.innerText = productArray[9].name;
        newElement.classList.add("shoppingBoxName");
        var newElement2 = document.createElement("div");
        newElement2.innerText = productArray[9].price;
        newElement2.classList.add("shoppingBoxPrice");
        var newElement3 = document.createElement("button");
        newElement3.classList.add("shoppingBoxButton");
        newElement3.innerText = "Usuń";
        shoppingBoxContainer.appendChild(newElement);
        shoppingBoxContainer.appendChild(newElement2);
        shoppingBoxContainer.appendChild(newElement3);
        document.getElementById("totalPrice").textContent = totalPrice;
    });
    button11.addEventListener('click', function(){
        totalPrice+= productArray[10].price;
        var newElement = document.createElement("div");
        newElement.innerText = productArray[10].name;
        newElement.classList.add("shoppingBoxName");
        var newElement2 = document.createElement("div");
        newElement2.innerText = productArray[10].price;
        newElement2.classList.add("shoppingBoxPrice");
        var newElement3 = document.createElement("button");
        newElement3.classList.add("shoppingBoxButton");
        newElement3.innerText = "Usuń";
        shoppingBoxContainer.appendChild(newElement);
        shoppingBoxContainer.appendChild(newElement2);
        shoppingBoxContainer.appendChild(newElement3);
        document.getElementById("totalPrice").textContent = totalPrice;
    });
    button12.addEventListener('click', function(){
        totalPrice+= productArray[11].price;
        var newElement = document.createElement("div");
        newElement.innerText = productArray[11].name;
        newElement.classList.add("shoppingBoxName");
        var newElement2 = document.createElement("div");
        newElement2.innerText = productArray[11].price;
        newElement2.classList.add("shoppingBoxPrice");
        var newElement3 = document.createElement("button");
        newElement3.classList.add("shoppingBoxButton");
        newElement3.innerText = "Usuń";
        shoppingBoxContainer.appendChild(newElement);
        shoppingBoxContainer.appendChild(newElement2);
        shoppingBoxContainer.appendChild(newElement3);
        document.getElementById("totalPrice").textContent = totalPrice;
    });


    // var buttonDelete = document.getElementById("delete");

    // buttonDelete.addEventListener('click', function(){
    //    var child1 = document.getElementsByClassName("shoppingBoxName");
    //    var child2 = document.getElementsByClassName("shoppingBoxPrice");
    //    var parent = document.getElementById("shoppingBoxContainer");
    //    parent.removeChild(child1);
    //    parent.removeChild(child2);
    // });


}