function selectCity(value) {
    var hotel = document.getElementById("hotels");

    var hotels = {
        ahmedabad: ["Jon", "Frank", "Matthew"],
        navsari: ["Alpha", "Omega", "Beta"],
        anand: ["Edward", "Bella", "Jacob"],
        surat: ["Kristen", "Jennifer", "Margot"],

    };

    for (var i = 0; i < hotels[value].length; i++) {
        var option = document.createElement("option");
        option.value = hotels[value][i];
        option.text = hotels[value][i];
        hotel.appendChild(option);
    }

    document.getElementById("hotels").disabled = false;
}

function selectRestaurant(value) {
    var item = document.getElementById("menu");

    var menu = {
        Jon: ["punjabi_fix", "chinese_fix", "gujarati_fix"],
        Frank: ["garlicbread", "margarita", "puff"],
        Matthew: ["pasta", "maggi", "vegetable"],
        Alpha: ["browny", "Ice_cream", "chocolate_milkshake"],
        Omega: ["biryani", "chicken", "Chiken_Kabab"],
        Beta: ["veg_kohlapuri", "pannerbalty", "panner_khoya"],
        Edward: ["myshore_Dosha:", " aloo_paneer", "chana_khoya"],
        Bella: ["Chinese_noodles", "Sandwhich", "veg_maggie_pasta"],
        Jacob: ["biryani", "chicken", "Chiken_Kabab"],
        Kristen: ["punjabi_fix", "chinese_fix", "gujarati_fix"],
        Jennifer: ["garlicbread", "margarita", "vegetable"],
        Margot: ["biryani", "chicken", "Chiken_Kabab"],


    };
    console.log(item);
    for (var i = 0; i < menu[value].length; i++) {
        var option = document.createElement("option");
        option.value = menu[value][i];
        option.text = menu[value][i];
        item.appendChild(option);
    }
    document.getElementById("menu").disabled = false;
}

function selectDish(value) {
    var pr = document.getElementById("price");

    var prices = {
        punjabi_fix: 250,
        chinese_fix: 200,
        gujarati_fix: 150,
        garlicbread: 70,
        margarita: 120,
        vegetable: 150,
        browny: 50,
        biryani: 150,
        chicken: 250,
        kajukari: 200,
        Fish: 200,
        veg_kohlapuri: 150,
        pannerbalty: 120,
        panner_khoya: 130,
        myshore_Dosha: 110,
        chana_khoya: 120,
        Paneer_pasta: 130,
        aloo_paneer: 100,
        Dry_chicken: 200,
        chocolate_milkshake: 100,
        veg_maggie_pasta: 100,
        Sandwhich: 80,
        Cheese_burger: 60,
        Parotha_shak: 20,
        Chiken_Kabab: 150,
        Ice_cream: 60,
        Chinese_noodles: 70
    };

    document.getElementById("bill").disabled = false;
    bill.innerHTML = prices[value];
    bill.value = prices[value];
    document.getElementById("bill").readOnly = true;
}