
let todoList = []

const addListItem = (item) => {

  todoList.push(item)

  return function changeName(changeItem) {

    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i] === item) {
        todoList[i] === changeItem
      }

    }
  
  }
}

addListItem('Milk')
addListItem('Chips')
addListItem('Yogurt')


addListItem('Chips')('Cereal')

console.log(todoList)
