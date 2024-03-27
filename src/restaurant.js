//function createRestaurant (name, menus) {
  //  return {
    //  name: name,
    //  menus: menus || {}
    //};
//} this one didn't seem to work, it would only take in menus.


function createRestaurant(name, breakfastMenu, lunchMenu, dinnerMenu) {
    return {
      name: name,
      menus: {
          breakfast: breakfastMenu || [],
          lunch: lunchMenu || [],
          dinner: dinnerMenu || []
      }
    }
  }

//function addMenuItem (pizzaRestaurant, item) {
//  if (item.type === "lunch") {
//    pizzaRestaurant.menus.lunch.push(item);
//  }
//}

function addMenuItem(restaurant, item) {
  var menuType = item.type;
  if (menuType && restaurant.menus.hasOwnProperty(menuType)) {
      restaurant.menus[menuType].push(item);
  }
}
function removeMenuItem (restaurant, item, menuType) {
  if (restaurant.menus.hasOwnProperty(menuType)) {
      var menu = restaurant.menus[menuType];
      for (var i = 0; i < menu.length; i++) {
        if (menu[i].name === item) {
            menu.splice(i, 1);
            return `No one is eating our ${item} - it has been removed from the ${menuType} menu!`;
        }
      }
      return `${item} is not found in the ${menuType} menu.`;
  }
}

function checkForFood (restaurant, foodItem) {
  for (var i = 0; i < restaurant.menus.length; i++) {
    if (restaurant.menus[i].name === foodItem.name) {
      return "Yes, we're serving " + foodItem.name + " today!";
      }
    }
    return "Sorry, " + foodItem.name + " is not available today.";
  }

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood,
}

console.log(createRestaurant);
console.log(addMenuItem);
console.log(removeMenuItem);
console.log(checkForFood);