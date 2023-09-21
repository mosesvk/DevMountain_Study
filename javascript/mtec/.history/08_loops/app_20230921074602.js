
let todoList = []

const addListItem = () => {

  let item = 'groceries'

  todoList.push(item)

  let className = null; 

  function addClass() {

    className = 'todo-item'
 
  }

  return todoList
}

