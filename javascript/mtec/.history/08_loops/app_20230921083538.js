let shoppingList = [
  { name: `bananas`, count: 4 },
  { name: `bread`, count: 2 },
  { name: `eggs`, count: 12 },
  { name: `sugar`, count: 1 }
];
let totalItems = 0;

for (let item of shoppingList) {
  totalItems = totalItems + item.count;
}

console.log(totalItems)
