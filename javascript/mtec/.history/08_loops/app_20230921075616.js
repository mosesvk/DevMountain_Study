
let todoList = []

const addListItem = (item) => {

  todoList.push(item)

  return function changeName(changeItem) {

    console.log(changeItem)
  
  }

  console.log(todoList)
}

addListItem('Milk')
addListItem('Chips')

addListItem()('yessir')

