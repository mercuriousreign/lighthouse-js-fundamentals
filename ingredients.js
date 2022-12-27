const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let index = 0
while (index < ingredients.length){
  console.log(ingredients[index]);
  index += 1;
}

console.log("");

// Write a for loop that prints out the contents of ingredients:
for (let i = 0 ; i < ingredients.length ; i++){
  console.log(ingredients[i]);
}

console.log("");
// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (let b = ingredients.length - 1 ; b >= 0; b--){
  console.log(ingredients[b]);
}
