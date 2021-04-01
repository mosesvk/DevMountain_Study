//Helper Functions
const countFiles = async (path, str, count) => {
  const response = await axios.get(`http://localhost:6731/api/count?path=${path}&str=${str}&count=${count}`)
  return response.data
}

//path to the file from the server
const jsFile = 'closures/practice-closures.js'

//Test Suite
describe(`Unit Assessment 3 - Closures`, () => {
  describe(`Problem 1 - myFunc`, () => {
    it(`myFunc should exist`, () => {
      expect(myFunc).toBeDefined()
    })
    it(`myFunc should be a function`, () => {
      expect(typeof myFunc).toEqual('function')
    })
    it(`secretString should exist`, () => {
      expect(secretString).toBeDefined()
    })
    it(`should contain correct text`, () => {
      const stringTest = secretString()
      expect(stringTest).toEqual(`super secret string`)
    })
  })

  describe(`Problem 2 - lightSwitch`, () => {
    it(`lightSwitch should exist`, () => {
      expect(lightSwitch).toBeDefined()
    })
    it(`kitchenSwitch should exist`, () => {
      expect(kitchenSwitch).toBeDefined()
    })
    it(`kitchenSwitch should return the correct values`, () => {
      const kitchenTest = kitchenSwitch()
      expect(kitchenTest).toEqual(`The light is off`)
    })
    it(`bathroomSwitch should exist`, () => {
      expect(bathroomSwitch).toBeDefined()
    })
    it(`bathroomSwitch should return the correct value`, () => {
      const bathroomTest = bathroomSwitch()
      expect(bathroomTest).toEqual(`The light is on`)
    })
  })

  describe(`Problem 3 - plantTracker`, () => {
    const trackerTest = plantTracker()
    it(`plantTracker should exist`, () => {
      expect(plantTracker).toBeDefined()
    })
    it(`readInfo should exist and function properly`, () => {
      const readTest = trackerTest.readInfo()
      expect(readTest).toEqual(`This is a fern plant that is 12 inches tall.`)
    })
    it(`waterPlant should exist and function properly`, () => {
      const waterTest = trackerTest.waterPlant()
      expect(waterTest).toEqual(13)
    })
    it(`prunePlant should exist and function properly`, () => {
      const pruneTest = trackerTest.prunePlant()
      expect(pruneTest).toEqual(12)
    })
  })

  describe(`Problem 4 - inventory`, () => {
    it(`inventory should exist`, () => {
      expect(inventory).toBeDefined()
    })
    describe(`shoes`, () => {
      it(`should exist`, () => {
        expect(shoes).toBeDefined()
      })
      it(`should have a readProducts method`, () => {
        expect(shoes.readProducts).toBeDefined()
      })
      it(`should have a addToProducts method`, () => {
        expect(shoes.addToProducts).toBeDefined()
      })
      it(`should have a deleteFromProducts method`, () => {
        expect(shoes.deleteFromProducts).toBeDefined()
      })
      it(`you used addToProducts to add something in`, async () => {
        const response = await countFiles(jsFile, 'shoes.addToProducts(')
        expect(response).toEqual(true)
      })
      it(`now shoes should have 1 item in it`, () => {
        const products = shoes.readProducts()
        expect(products.length).toEqual(1)
      })
    })
    describe(`We'll run a test making a new inventory of books and testing its addToProducts and deleteFromProducts functions`, () => {
      const books = inventory()
      it(`should be able to add in books`, () => {
        books.addToProducts('Harry Potter and the Goblet of Fire')
        books.addToProducts('Lord of the Rings')
        books.addToProducts('To Kill a Mockingbird')
        expect(books.readProducts().length).toBe(3)
      })
      it(`should be able to delete a book`, () => {
        books.deleteFromProducts('Lord of the Rings')
        expect(books.readProducts()[0]).toEqual('Harry Potter and the Goblet of Fire')
        expect(books.readProducts()[1]).toBe('To Kill a Mockingbird')
      })
    })
  })
})
