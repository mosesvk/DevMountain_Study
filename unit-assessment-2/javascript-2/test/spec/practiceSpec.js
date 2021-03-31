//Helper Functions
const countFiles = async (path, str, count) => {
  const response = await axios.get(
    `http://localhost:5782/api/count?path=${path}&str=${str}&count=${count}`
  )
  return response.data
}

const checkFiles = async (pathArr, strArr) => {
  const response = await axios.post(`http://localhost:5782/api/check`, {
    pathArr,
    strArr,
  })
  return response.data
}

const jsFile = 'javascript-2/javascript-2.js'

//Test Suite
describe('Unit Assessment 2 -- JavaScript 2', () => {
  describe('Problem 1 - foods', () => {
    it('calories should have been added to each food object', () => {
      let test = true
      for (let i = 0; i < foods.length; i++) {
        if (!foods[i].calories) {
          test = false
        }
      }
      expect(test).toEqual(true)
    })
    it('should use the forEach method', async () => {
      const response = await countFiles(jsFile, 'foods.forEach(', 1)
      expect(response).toBe(true)
    })
  })

  describe('Problem 2 - saleProducts', () => {
    it('saleProducts should exist', () => {
      expect(saleProducts).toBeDefined()
    })
    it('should use the map method', async () => {
      const response = await countFiles(jsFile, 'saleProducts=products.map(', 1)
      expect(response).toBe(true)
    })
    describe('backpack', () => {
      it('backpack should still be an object', () => {
        expect(typeof saleProducts[0]).toBe('object')
      })
      it('backpack should still have the name backpack', () => {
        expect(typeof saleProducts[0].name).toBe('string')
      })
      it('backpack should still have a color array', () => {
        expect(typeof saleProducts[0].color).toBe('object')
      })
      it(`the price of backpack should be 25% off`, () => {
        expect(saleProducts[0].price).toEqual(375)
      })
    })
    describe('shirt', () => {
      it('shirt should still be an object', () => {
        expect(typeof saleProducts[1]).toBe('object')
      })
      it('shirt should still have the name shirt', () => {
        expect(typeof saleProducts[1].name).toBe('string')
      })
      it('shirt should still have a color array', () => {
        expect(typeof saleProducts[1].color).toBe('object')
      })
      it(`the price of shirt should be 25% off`, () => {
        expect(saleProducts[1].price).toEqual(300)
      })
    })
    describe('shoes', () => {
      it('shoes should still be an object', () => {
        expect(typeof saleProducts[2]).toBe('object')
      })
      it('shoes should still have the name shoes', () => {
        expect(typeof saleProducts[2].name).toBe('string')
      })
      it('shoes should still have a color array', () => {
        expect(typeof saleProducts[2].color).toBe('object')
      })
      it(`the price of shoes should be 25% off`, () => {
        expect(saleProducts[2].price).toEqual(900)
      })
    })
    describe('socks', () => {
      it('socks should still be an object', () => {
        expect(typeof saleProducts[3]).toBe('object')
      })
      it('socks should still have the name socks', () => {
        expect(typeof saleProducts[3].name).toBe('string')
      })
      it('socks should still have a color array', () => {
        expect(typeof saleProducts[3].color).toBe('object')
      })
      it(`the price of socks should be 25% off`, () => {
        expect(saleProducts[3].price).toEqual(150)
      })
    })
    describe('pants', () => {
      it('pants should still be an object', () => {
        expect(typeof saleProducts[4]).toBe('object')
      })
      it('pants should still have the name pants', () => {
        expect(typeof saleProducts[4].name).toBe('string')
      })
      it('pants should still have a color array', () => {
        expect(typeof saleProducts[4].color).toBe('object')
      })
      it(`the price of pants should be 25% off`, () => {
        expect(saleProducts[4].price).toEqual(750)
      })
    })
  })

  describe('Problem 3 - blueProducts', () => {
    it('blueProducts should exist', () => {
      expect(blueProducts).toBeDefined()
    })
    it('all blueProducts objects should have blue in their color array', () => {
      let test = true
      for (let i = 0; i < blueProducts.length; i++) {
        if (!blueProducts[i].color.includes('blue')) {
          test = false
        }
      }
      expect(test).toBe(true)
    })
    it('should use the filter method', async () => {
      let response = await countFiles(
        jsFile,
        'blueProducts=saleProducts.filter(',
        1
      )
      expect(response).toBe(true)
    })
  })

  describe('Problem 4 - orderTotal', () => {
    it('orderTotal should exist', () => {
      expect(orderTotal).toBeDefined()
    })
    it('orderTotal should be the correct value', () => {
      expect(orderTotal).toEqual(1200)
    })
    it('should use reduce method', async () => {
      const response = await countFiles(
        jsFile,
        'orderTotal=blueProducts.reduce(',
        1
      )
      expect(response).toBe(true)
    })
  })

  describe('Problem 5 - helensInfo', () => {
    it('helensInfo should exist', () => {
      expect(helensInfo).toBeDefined()
    })
    it('should use Object.assign', async () => {
      const response = await countFiles(jsFile, 'helensInfo=Object.assign(', 1)
      expect(response).toBe(true)
    })
    describe('helensInfo should contain the correct properties and values', () => {
      it(`name property should be Helen`, () => {
        expect(helensInfo.name).toBe('Helen')
      })
      it(`phoneNumber property should be 1234445555`, () => {
        expect(helensInfo.phoneNumber).toBe(1234445555)
      })
      it(`street property should be 100 E. Main Street`, () => {
        expect(helensInfo.street).toBe('100 E. Main Street')
      })
      it(`city property should be Anytown`, () => {
        expect(helensInfo.city).toBe('Anytown')
      })
      it(`state property should be AZ`, () => {
        expect(helensInfo.state).toBe('AZ')
      })
      it(`zipCode property should be 85004`, () => {
        expect(helensInfo.zipCode).toBe(85004)
      })
      it(`email property should be helen@mymail.com`, () => {
        expect(helensInfo.email).toBe('helen@mymail.com')
      })
    })
  })

  describe('Problem 6 - ellensInfo', () => {
    it('ellensInfo should exist', () => {
      expect(ellensInfo).toBeDefined()
    })
    it('should use the spread operator', async () => {
      const response = await countFiles(jsFile, '...helensInfo', 1)
      expect(response).toBe(true)
    })
    describe('ellensInfo should contain the correct properties and values', () => {
      it(`name property should be Ellen`, () => {
        expect(ellensInfo.name).toBe('Ellen')
      })
      it(`phoneNumber property should be 1234445555`, () => {
        expect(ellensInfo.phoneNumber).toBe(1234445555)
      })
      it(`street property should be 100 E. Main Street`, () => {
        expect(ellensInfo.street).toBe('100 E. Main Street')
      })
      it(`city property should be Anytown`, () => {
        expect(ellensInfo.city).toBe('Anytown')
      })
      it(`state property should be AZ`, () => {
        expect(ellensInfo.state).toBe('AZ')
      })
      it(`zipCode property should be 85004`, () => {
        expect(ellensInfo.zipCode).toBe(85004)
      })
      it(`email property should be ellen@email.com`, () => {
        expect(ellensInfo.email).toBe('ellen@email.com')
      })
    })
  })

  describe('Problem 7 - email', () => {
    it('email should exist', () => {
      expect(email).toBeDefined()
    })
    it('email should be the correct value', () => {
      expect(email).toEqual('ellen@email.com')
    })
    it('should use destructuring', async () => {
      const response = await countFiles(jsFile, '{email}=ellensInfo', 1)
      expect(response).toBe(true)
    })
  })

  describe('Problem 8 - zipCode and state', () => {
    it('zipCode should exist', () => {
      expect(zipCode).toBeDefined()
    })
    it('state should exist', () => {
      expect(state).toBeDefined()
    })
    it('zipCode should be the correct value', () => {
      expect(zipCode).toEqual(85004)
    })
    it('state should be the correct value', () => {
      expect(state).toEqual('AZ')
    })
    it('should use destructuring', async () => {
      const itemsToCheck = [
        '{zipCode,state}=shippingInfo',
        '{state,zipCode}=shippingInfo',
      ]
      const response = await checkFiles([jsFile], itemsToCheck)
      expect(response).toBe(true)
    })
  })

  describe('Problem 9 - shouldAlert', () => {
    it('shouldAlert should exist', () => {
      expect(shouldAlert).toBeDefined()
    })
    it('shouldAlert should be the correct value', () => {
      expect(shouldAlert).toEqual(false)
    })
    it('should use dot notation', async () => {
      const response = await countFiles(
        jsFile,
        'shouldAlert=userInfo.settings.alerts',
        1
      )
      expect(response).toBe(true)
    })
  })

  describe('Problem 10 - topic', () => {
    it('topic should exist', () => {
      expect(topic).toBeDefined()
    })
    it('topic should be the correct value', () => {
      expect(topic).toEqual('tech')
    })
    it('should use bracket and/or dot notation', async () => {
      const itemsToCheck = [
        'topic=userInfo.topics[3]',
        `topic=userInfo['topics'][3]`,
        `topic=userInfo["topics"][3]`,
        `topic=userInfo.topics[userInfo.topics.length-1]`,
        `topic=userInfo['topics'][userInfo.topics.length-1]`,
        `topic=userInfo["topics"][userInfo.topics.length-1]`,
      ]
      const response = await checkFiles([jsFile], itemsToCheck)
      expect(response).toBe(true)
    })
  })

  describe('Problem 11 - commenterId', () => {
    it('commenterId should exist', () => {
      expect(commenterId).toBeDefined()
    })
    it('commenterId should be the correct value', () => {
      expect(commenterId).toEqual(1084)
    })
  })

  describe('Problem 12 - person', () => {
    it('person should exist', () => {
      expect(person).toBeDefined()
    })
    describe('person should have all the correct properties', () => {
      it(`person.name should exist`, () => {
        expect(person.name).toBeDefined()
      })
      it(`person.age should exist`, () => {
        expect(person.age).toBeDefined()
      })
      it(`person.jobs should exist`, () => {
        expect(person.jobs).toBeDefined()
      })
      it(`person.birthday should exist`, () => {
        expect(person.birthday).toBeDefined()
      })
      it(`person.favorites should exist`, () => {
        expect(person.favorites).toBeDefined()
      })
      it(`person.kids should exist`, () => {
        expect(person.kids).toBeDefined()
      })
    })
    describe(`person's properties' values should be the correct data types`, () => {
      it(`person's name property should be a string`, () => {
        expect(typeof person.name).toBe('string')
      })
      it(`person's age property should be a number`, () => {
        expect(typeof person.age).toBe('number')
      })
      it(`person's jobs property should be an object (arrays are a type of object)`, () => {
        expect(typeof person.jobs).toBe('object')
      })
      it(`person's birthday property should be a function`, () => {
        expect(typeof person.birthday).toBe('function')
      })
      it(`person's favorites property should be an object`, () => {
        expect(typeof person.favorites).toBe('object')
      })
      it(`person's kids property should be an object (arrays are a type of object)`, () => {
        expect(typeof person.kids).toBe('object')
      })
    })
    it(`person's job array should contain at least three strings`, () => {
      expect(typeof person.jobs[0]).toBe('string')
      expect(typeof person.jobs[1]).toBe('string')
      expect(typeof person.jobs[2]).toBe('string')
      expect(person.jobs.length).toBe(3)
    })
    it(`person's birthday method should function correctly`, () => {
      const originalPerson = { ...person }
      originalPerson.birthday()
      expect(originalPerson.age > person.age).toBe(true)
    })
    describe(`person's favorites should exist and have the correct data types`, () => {
      it(`favorites object should have a color property`, () => {
        expect(person.favorites.color).toBeDefined()
      })
      it(`color property should be a string`, () => {
        expect(typeof person.favorites.color).toBe('string')
      })
      it(`favorites object should have a number property`, () => {
        expect(person.favorites.number).toBeDefined()
      })
      it(`number property should be a number`, () => {
        expect(typeof person.favorites.number).toBe('number')
      })
      it(`favorites object should have a book property`, () => {
        expect(person.favorites.book).toBeDefined()
      })
      it(`book property should be a string`, () => {
        expect(typeof person.favorites.book).toBe('string')
      })
    })
    describe(`person should have at least two kids, both with name and age properties of the correct data types`, () => {
      it(`the first child should exist`, () => {
        expect(person.kids[0]).toBeDefined()
      })
      it(`their name should be a string`, () => {
        expect(typeof person.kids[0].name).toBe('string')
      })
      it(`their age should be a number`, () => {
        expect(typeof person.kids[0].age).toBe('number')
      })
      it(`the second child should exist`, () => {
        expect(person.kids[1]).toBeDefined()
      })
      it(`their name should be a string`, () => {
        expect(typeof person.kids[1].name).toBe('string')
      })
      it(`their age should be a number`, () => {
        expect(typeof person.kids[1].age).toBe('number')
      })
    })
  })

  describe('Problem 13 - workout context', () => {
    it('context1 should be the correct value', () => {
      expect(context1).toBe(workout)
    })
  })

  describe('Problem 14 - myFunc context', () => {
    it('context2 should be the correct value', () => {
      expect(context2).toBe(window)
    })
  })
})
