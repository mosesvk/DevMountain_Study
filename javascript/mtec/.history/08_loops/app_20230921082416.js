let todosList = ['controller', 'console', 'cod']

todosList.forEach(function(elem, idx) {

  if (elem === 'cod') todosList[idx] = 'superSmashBros'
})

console.log(todosList)