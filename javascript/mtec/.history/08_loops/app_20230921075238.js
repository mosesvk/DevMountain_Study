
let todoList = []

const addListItem = (item) => {

  todoList.push(item)

  return function changeName() {

    console.log('closure')
    
  }

  console.log(todoList)
}

addListItem('Milk')
addListItem('Chips')

addListItem()()

