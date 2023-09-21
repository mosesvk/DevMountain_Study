
let todoList = []

const addListItem = (item) => {

  todoList.push(item)

  console.log(todoList
    )

  return function changeName(changeItem) {

    for (let i = 0; i < todoList.length; i++) {
      console.log(i)
      if (todoList[i] === item) {
        todoList[i] = changeItem
        console.log(todoList[i])
      }

    }
  
  }
}

addListItem('Milk')
addListItem('Chips')
addListItem('Yogurt')


addListItem('Chips')('Cereal')

console.log(todoList)
