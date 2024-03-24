function nameMenuItem(menuItemName) {
return "Delicious " + `${menuItemName}`;
}

function createMenuItem(menuItemName, price, type) {
  var menuItem = {
    name: menuItemName,
    price: price,
    type: type,
    };

return menuItem;
  }

function addIngredients(ingredient, ingredientsArray){
  return ingredientsArray.push(ingredient);
}


function formatPrice(initialPrice) {
  return "$" + initialPrice;
}
console.log(formatPrice)

function decreasePrice(initialPrice) {
  return initialPrice * 0.9
}


function createRecipe(title, ingredients, menuItemType) {
    var recipe = {
      title: title,
      ingredients: ingredients,
      type: menuItemType,
    };
return recipe;
  }

//var menuItemName = nameMenuItem
//var menuItem = createMenuItem
//var initialPrice = menuItem.price
//var formattedPrice = formatPrice(initialPrice);

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe,
}
//test
console.log(nameMenuItem);
console.log(createMenuItem);
console.log(addIngredients);
console.log(formatPrice);
console.log(decreasePrice);
console.log(createRecipe);
