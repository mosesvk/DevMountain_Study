
let todoList = []

const addListItem = (item) => {

  todoList.push(item)

  return function changeName(changeItem) {

    console.log(item)
    console.log(changeItem)
  
  }
}

addListItem('Milk')
addListItem('Chips')

addListItem('lets go')('yessir')

