let chocs = [
    {
    chocName: "Plain Milk",
    description: "Smooth milk chocolate",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream",
    img: "assets/plain_milk.jpg",
    },
    {
    chocName: "Plain Dark",
    description: "Dark chocolate",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream",
    img: "assets/plain_dark.jpg",
    },
    {
    chocName: "Bailey's Cup",
    description: "Dark chocolate with Bailey's Cream Filling",
    calories: 100,
    ingredients: "Cocoa butter, Milk, Cream, baileys",
    img: "assets/baileys_cup.jpg",
    },
    {
    chocName: "Cappuccino Cup",
    description: "Dark chocolatewith Cappuccino style cream filling",
    calories: 120,
    ingredients: "Cocoa butter, Milk, Cream, Cappuccino fondant",
    img: "assets/cappuccino_cup.jpg",
    },
    {
    chocName: "Nutter Butter",
    description: "Dark chocolate with peanut butter",
    calories: 190,
    ingredients: "Cocoa butter, Milk, Cream, peanut butter",
    img: "assets/nutter_butter.jpg",
    },
    {
    chocName: "Orange Fondant",
    description: "Dark chocolate folded with orange fondant",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream, orange peel, orange fondant",
    img: "assets/orange_fondant.jpg",
    },
    {
    chocName: "Pistachio Cup",
    description: "Dark chocolate with nuggets of pistachio",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream, chunks of pistachio nut",
    img: "assets/pistachio_diamond.jpg",
    },
    {
    chocName: "Rum Barrel",
    description: "Dark chocolate with a decadent rum filling",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream, rum paste and rum flavourings",
    img: "assets/rum_barrel.jpg",
    },
    {
    chocName: "Toffee Crunch",
    description: "Dark chocolate with brittle toffee candy",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream, toffee",
    img: "assets/toffee_crunch.jpg",
    },
    {
    chocName: "Plain Supreme",
    description: "Dark chocolate with slivers of milk chocolate",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream",
    img: "assets/plain_hybrid.jpg",
    },
];

const seed = () => {

    // creata a flex wrapper for the chocs
    let theWrapper = document.createElement("div");
    console.log("Wrapper: ", theWrapper); // make sure to view this

    chocs.forEach((choc) => {

    // create card to store choc information
    console.log(choc);
    let chocDiv = document.createElement("div");
    chocDiv.classList.add("box");

    // create h2 for choc's name
    let chocHeader = document.createElement("h2");
    chocHeader.textContent = choc.chocName;
    chocDiv.append(chocHeader);

    //add images
    let pChocImg = document.createElement("img");
    pChocImg.src = choc.img;
    chocDiv.appendChild(pChocImg);

    //create the description paragraph
    let pChocDescription = document.createElement("p");
    pChocDescription.textContent = choc.description;
    chocDiv.appendChild(pChocDescription);


    //create a calories <p>
    let pChocCalories = document.createElement("p");
    pChocCalories.textContent = "Calories : " + choc.calories;
    chocDiv.appendChild(pChocCalories);


    //create ingredients <p>
    let pChocIngredients = document.createElement("p");
    pChocIngredients.textContent = choc.ingredients;
    chocDiv.appendChild(pChocIngredients);

    // add classes so that they can be targeted using jQuery or JavaScript
    pChocDescription.classList.add("chocolateDescription");
    pChocCalories.classList.add("chocolateCalories");
    pChocIngredients.classList.add("chocolateIngredients");

    //add chocoDiv to the container
    theWrapper.append(chocDiv);
});

//add the wrapper div to the document after the last paragraph
$("p:last").after(theWrapper);

// Use JS to add a class
theWrapper.classList.add("chocolateWrapper");
};

$(document).ready(seed);


let showDetails = true;
// ! toggles true to false and vice versa
//
const toggleDetails = () => {
    showDetails = !showDetails;
    // use jQuery to target the paragraphs with classes indicated
    // in this example, only pargraphs have the details, so could just target p
    if (showDetails) {
    $(
    "p.chocolateCalories, p.chocolateIngredients, p.chocolateDescription"
    ).show();
    } else {
    $(
    "p.chocolateCalories, p.chocolateIngredients, p.chocolateDescription"
    ).hide();
    }
    };

const highlightRandomChocolate = () => {
    // Reset by unhighlightening all first
    $(".chocolateWrapper .box").css("background-color", "#FFFDD0");

    let randomIndex = Math.floor(Math.random() * chocs.length);
    console.log(randomIndex);

    $(".chocolateWrapper .box:eq(" + randomIndex + ")").css(
    "background-color","#FFF985");

    alert("Give this number to cashier, let cashier know " +
    chocs[randomIndex].chocName + ": " + (randomIndex + 1)
    );
    };