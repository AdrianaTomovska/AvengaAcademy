let ingredients = [];
let ingredientTotal =0;

function startRecipe(){
    let countInput = document.getElementById("ingredientCount").value;
    ingredientTotal = Number(countInput);

    let section = document.getElementById("ingredientsSection");
    section.innerHTML = "";
    ingredients = [];

    if(ingredientTotal <= 0 ) {
        alert("Enter a valid number of ingredients");
        return;
    }

    for (let i =0; i < ingredientTotal; i++) {
        let input = document.createElement("input");
        input.type="text";
        input.placeholder = "Ingredient " + (i + 1);
        input.className = "ingredient";
        section.appendChild(input);
        section.appendChild(document.createElement("br"));
    }
}

function createRecipe() {
    let recipeName = document.getElementById("recipeName").value;
    let ingredientInputs = document.getElementsByClassName("ingredient");

    if (recipeName === "") {
        alert("Enter a recipe name");
        return;
    }

    for (let i = 0; i < ingredientInputs.length; i++) {
        if (ingredientInputs[i].value === "") {
            alert("Fill in all ingredients");
            return;
        }
        ingredients.push(ingredientInputs[i].value);
    }

    displayRecipe(recipeName, ingredients);
}


function displayRecipe(name, ingredientArray) {
    let result = document.getElementById("recipeResult");
    result.innerHTML = "";


    let title = document.createElement("h1");
    title.textContent = name;
    result.appendChild(title);

  
    let ul = document.createElement("ul");

    for (let i = 0; i < ingredientArray.length; i++) {
        let li = document.createElement("li");
        li.textContent = ingredientArray[i];
        ul.appendChild(li);
    }

    result.appendChild(ul);
}


