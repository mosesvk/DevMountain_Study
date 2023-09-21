let todosList = ['controller', 'console', 'cod']

todosList.forEach(function(elem, idx) {

  if (idx === 2) todosList[idx] = 'superSmashBros'
})

console.log(todosList)