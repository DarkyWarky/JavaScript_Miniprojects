const Allbtn = document.getElementById("All");
const Breakfast = document.getElementById("Breakfast");
const Dinner = document.getElementById("Dinner");
const Lunch = document.getElementById("Lunch");

const foodMenu = {
  breakfast: [
    {
      name: "Pancakes",
      price: 7.99,
      description: "Fluffy pancakes served with maple syrup.",
    },
    {
      name: "Eggs Benedict",
      price: 9.49,
      description: "Poached eggs on English muffin with hollandaise sauce.",
    },
    {
      name: "Omelette",
      price: 8.99,
      description: "Customizable omelette with your choice of fillings.",
    },
  ],
  lunch: [
    {
      name: "Chicken Caesar Salad",
      price: 10.99,
      description:
        "Crispy romaine lettuce with grilled chicken and Caesar dressing.",
    },
    {
      name: "Cheeseburger",
      price: 8.99,
      description: "Juicy beef patty with melted cheese and toppings.",
    },
    {
      name: "Margherita Pizza",
      price: 12.49,
      description: "Classic pizza with tomato, mozzarella, and basil.",
    },
  ],
  dinner: [
    {
      name: "Grilled Salmon",
      price: 15.99,
      description: "Freshly grilled salmon fillet with lemon and herbs.",
    },
    {
      name: "Steak with Mashed Potatoes",
      price: 18.49,
      description: "Tender steak served with creamy mashed potatoes.",
    },
    {
      name: "Vegetable Stir-Fry",
      price: 12.99,
      description: "Assorted vegetables stir-fried with soy sauce.",
    },
  ],
};

function displayItems(items) {
  const itemElements = items.map((item) => {
    return `<div class="item">
          <h1>${item.name}</h1>
          <p>${item.description}</p>
          <p>Price: $${item.price.toFixed(2)}</p>
      </div>`;
  });
  return itemElements.join("");
}
Allbtn.addEventListener("click", function () {
  const allItems = Object.values(foodMenu).flatMap((items) => items);
  const menuItemsDiv = document.getElementById("menuItems");
  menuItemsDiv.innerHTML = displayItems(allItems);
});

Breakfast.addEventListener("click", function () {
  const breakfastItems = foodMenu.breakfast;
  const menuItemsDiv = document.getElementById("menuItems");
  menuItemsDiv.innerHTML = displayItems(breakfastItems);
});

Lunch.addEventListener("click", function () {
  const lunchItems = foodMenu.lunch;
  const menuItemsDiv = document.getElementById("menuItems");
  menuItemsDiv.innerHTML = displayItems(lunchItems);
});

Dinner.addEventListener("click", function () {
  const dinnerItems = foodMenu.dinner;
  const menuItemsDiv = document.getElementById("menuItems");
  menuItemsDiv.innerHTML = displayItems(dinnerItems);
});
