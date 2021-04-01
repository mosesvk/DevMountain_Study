const books = []
const id = 0

// Remember this is called 'bc' in the index file 
module.exports = { 
  read: (req, res) => {
    //Create a method called `read` in the `module.exports` object. This method should return all the books.
    res.status(200).send(books)
  }, 

  create: (req, res) => {
    // This method should add a new book from the request body to the `books` array.
    // When finished, it should return all the books.
    //Remember to destructure title and author from the req.body
    //Remember you have to create your own "book" object with an id, title, and author
    const {title, author} = req.body; 

    books.push({
      id, 
      title, 
      author
    })

    id++; 
    res.status(200).send(books)
  }, 

  update: (req, res) => {
    const {id} = req.params
    const {title, author} = req.body
    let bookIndex = null
    books.forEach((elem, id) => {
      if(elem.id === +id){ //the +id will always be a number even if it's in a string 
        bookIndex = i
      }
    })
    const updatedBook = {
      id, 
      title, 
      author
    }
    books.splice(bookIndex, 1, updatedBook)


    // let index = null;
    // books.forEach((book, i) => {
    //   if (book.id === Number(req.params.id)) index = i;
    // });
    // books[index] = {
    //   id: books[index].id, 
    //   title: req.body.title || books[index].title, 
    //   author: req.body.author || books[index].author
    // };

    res.status(200).send(books)
  }, 

  delete: (req, res) => {
    // This method should find a specific book based off of an id that you'll get off of the `params` object.
    // Once the book is found, remove that book from the `books` array.

    books.forEach((elem, i) => {
      if(elem.id === +req.params.id){ //the + is the same as doing Number(req.params.id)
        books.splice(i, 1)
      }
    })

    // books.forEach((book, id) => {
    //   if (book.id === Number(req.params.id)){
    //     books.splice(book.id, 1)
    //   };
    // });

    // * Return all the books.
    res.status(200).send(books)
  }
};


let books = [];
let id = 0;

module.exports = {
  read: (req, res) => {
    res.status(200).send(books);
  },

  create: (req, res) => {
    const { title, author } = req.body;
    books.push({
      id, 
      title, 
      author
    })
    id++;
    res.status(200).send(books);
  },

  update: (req, res) => {
    const {id} = req.params
    const {title, author} = req.body
    let bookIndex = null
    books.forEach((elem, i) => {
      if(elem.id === +req.params.id){
        bookIndex = i
      }
    })
    const updatedBook = {
      id, 
      title, 
      author
    }
    books.splice(bookIndex, 1, updatedBook)


    // let index = null;
    // books.forEach((book, i) => {
    //   if (book.id === Number(req.params.id)) index = i;
    // });
    // books[index] = {
    //   id: books[index].id,
    //   title: req.body.title || books[index].title,
    //   author: req.body.author || books[index].author
    // };

    res.status(200).send(books);
  },

  delete: (req, res) => {
    let index = null;
    books.forEach((book, i) => {
      if (book.id === Number(req.params.id)) index = i;
    });
    books.splice(index, 1);
    res.status(200).send(books);
  }
};