
let todoList = []

const addListItem = (item) => {

  item && todoList.push(item)

  console.log(todoList)

  return function changeName(item, changeItem) {

    for (let i = 0; i < todoList.length; i++) {
      // console.log(i)
      if (todoList[i] === item) {
        todoList[i] = changeItem
        // console.log(todoList[i])
      }

    }
  
  }
}

addListItem('Milk')
addListItem('Chips')
addListItem('Yogurt')


addListItem()('Chips','Cereal')

console.log(todoList)

// console.log(todoList)
