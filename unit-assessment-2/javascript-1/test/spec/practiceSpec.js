//Helper Functions
const countFiles = async (path, str, count) => {
  const response = await axios.get(`http://localhost:5782/api/count?path=${path}&str=${str}&count=${count}`)
  return response.data
}

const searchFiles = async (pathArr, strArr) => {
  const response = await axios.post(`http://localhost:5782/api/search`, {pathArr, strArr})
  return response.data
}

const checkFiles = async (pathArr, strArr) => {
  const response = await axios.post(`http://localhost:5782/api/check`, {pathArr, strArr})
  return response.data
}

const jsFile = 'javascript-1/javascript-1.js'

//Test Suite
describe('Unit Assessment 2 -- JavaScript 1', () => {

  describe('Problem 1 - myArr', () => {
    it('myArr array should exist', () => {
      expect(myArr).toBeDefined()
    })
    it('myArr should contain the correct values', () => {
      expect(myArr[0]).toBe(4)
      expect(myArr[1]).toBe('abc')
      expect(myArr[2][0]).toBe('cat')
      expect(myArr[2][1]).toBe('dog')
      expect(myArr[2][2]).toBe('bird')
      expect(myArr[3]).toBe(77)
    })
  })

  describe('Problem 2 - foundZ', () => {
    it('foundZ should exist', () => {
      expect(foundZ).toBeDefined()
    })
    it('foundZ should be the correct value', () => {
      expect(foundZ).toBe('z')
    })
    it('should use bracket notation', async () => {
      const response = await countFiles(jsFile, 'foundZ=nestedLetters[5][2][1]')
      expect(response).toEqual(true)
    })
  })
  
  describe('Problem 3 - animals', () => {
    it('animals should exist', () => {
      expect(animals).toBeDefined()
    })
    it('animals should be the correct length', () => {
      expect(animals.length).toBe(14)
    })
    it('animals created using spread operator', async () => {
      const response = await searchFiles([jsFile], ['...forest', '...ocean', '...savannah', '...desert'])
      expect(response).toEqual(true)
    })
    it('animalsCopy should exist and be the correct length', () => {
      expect(animalsCopy).toBeDefined()
    })
    it('animalsCopy should be the correct length', () => {
      expect(animalsCopy.length).toBe(15)
    })
    it('elephant should be the last item in animalsCopy', () => {
      expect(animalsCopy[14]).toBe('elephant')
    })
    it('animalsCopy created using spread operator', async () => {
      const response = await countFiles(jsFile, '...animals')
      expect(response).toEqual(true)
    })
  })

  describe('Problem 4 - compareNums', () => {
    it('compareNums should exist', () => {
      expect(compareNums).toBeDefined()
    })
    it('compareNums should return the larger number', () => {
      expect(compareNums(6,3)).toBe(6)
    })
    it('compareNums should return the number if args are equal', () => {
      expect(compareNums(4,4)).toBe(4)
    })
    it('should be an arrow function', async () => {
      const response = await countFiles(jsFile, 'compareNums=(num1,num2)=>', 1)
      expect(response).toBe(true)
    })
  })

  describe('Problem 5 - bestMovie', () => {
    it('bestMovie should exist', () => {
      expect(bestMovie).toBeDefined()
    }) 
    it('bestMovie should function properly', () => {
      expect(bestMovie('Sharknado')).toBe('Sharknado is the best movie ever!')
    })
    it('should be an arrow function', async () => {
      const response = await checkFiles([jsFile], ['bestMovie=(movie)=>', 'bestMovie=movie=>'])
      expect(response).toBe(true)
    })
  })

  describe('Problem 6 - jsNinja', () => {
    it('jsNinja should exist', () => {
      expect(jsNinja).toBeDefined()
    })
    it('jsNinja should return the correct string', () => {
      expect(jsNinja()).toBe('I am a JavaScript ninja!')
    })
    it('should be an arrow function', async () => {
      const itemsToCheck = [
        'jsNinja=()=>',
        'jsNinja=_=>'
      ]
      const response = await checkFiles([jsFile], itemsToCheck)
      expect(response).toBe(true)
    })
  })

  describe('Problem 7 - gameInfo', () => {
    it('gameInfo should not contain a rating property', () => {
      expect(gameInfo.rating).toBe(undefined)
    })
    it('should use delete', async () => {
      const response = await countFiles(jsFile, 'deletegameInfo.rating')
      expect(response).toBe(true)
    })
  })

  describe('Problem 8 - shapes', () => {
    it('shapes should have square, rectangle, hexagon, and octogon properties', () => {
      expect(shapes.square && shapes.rectangle && shapes.hexagon && shapes.octagon).toBeDefined()
    })
    it('shapes should not have triangle, pentagon, or septagon properties', () => {
      expect(shapes.triangle && shapes.pentagon && shapes.septagon).toBe(undefined)
    })
    it('should use a for in loop', async () => {
      const itemsToCheck = [
        'for(letpropin',
        'for(letkeyin'
      ]
      const response = await checkFiles([jsFile], itemsToCheck)
      expect(response).toBe(true)
    })
  })

  describe('Problem 9 - classes', () => {
    it(`all class objects' inPerson values should be false`, () => {
      expect(classes[0].inPerson === false 
            && classes[1].inPerson === false 
            && classes[2].inPerson === false).toBe(true)
    })
    it(`all class objects' homework values should be false`, () => {
      expect(classes[0].homework === false 
            && classes[1].homework === false 
            && classes[2].homework === false).toBe(true)
    })
    it('should use a for loop', async () => {
      const response = await countFiles(jsFile, 'for(leti=', 1)
      expect(response).toBe(true)
    })
    it('should use a for in loop', async () => {
      const responseOne = await countFiles(jsFile, 'for(letpropin', 2)
      const responseTwo = await countFiles(jsFile, 'for(letkeyin', 2)
      expect(responseOne || responseTwo).toBe(true)
    })
  })

  describe('Problem 10 - pairsArray', () => {
    it('pairsArray should be the correct length', () => {
      expect(pairsArray.length).toBe(5)
    })
    it('pairsArray should contain the correct paired values', () => {
      expect(pairsArray[0][0] === 0 && pairsArray[0][1] === 4).toBe(true)
      expect(pairsArray[1][0] === 1 && pairsArray[1][1] === 8).toBe(true)
      expect(pairsArray[2][0] === 2 && pairsArray[2][1] === 5).toBe(true)
      expect(pairsArray[3][0] === 3 && pairsArray[3][1] === 6).toBe(true)
      expect(pairsArray[4][0] === 7 && pairsArray[4][1] === 9).toBe(true)
    })
  })

  describe('Problem 11 - Dog Constructor', () => {
    it('Dog constructor should exist', () => {
      expect(Dog).toBeDefined()
    })
    it('Dog constructor should create dog objects correctly', () => {
      const sarge = new Dog('Sarge', 10, 'schnauzer', ['roll over', 'stay'])
      expect(sarge.name).toBe('Sarge')
      expect(sarge.age).toBe(10)
      expect(sarge.breed).toBe('schnauzer')
      expect(sarge.tricks.length).toBe(2)
    })
    it('fido should be named Fido', () => {
      expect(fido.name).toBe('Fido')
    })
    it('fido should be 3 years old', () => {
      expect(fido.age).toBe(3)
    })
    it('fido should be a Jack Russell', () => {
      expect(fido.breed).toBe('Jack Russell')
    })
    it('fido should know sit and shake', () => {
      expect(fido.tricks[0]).toBe('sit')
      expect(fido.tricks[1]).toBe('shake')
    })
  })

  describe('Problem 12 - bark & fidoSpeak', () => {
    it('bark should exist', () => {
      expect(bark).toBeDefined()
    })
    it('fidoSpeak should exist', () => {
      expect(fidoSpeak).toBeDefined()
    })
    it('fidoSpeak shoulc contain the correct value', () => {
      expect(fidoSpeak).toBe('Fido says bark!')
    })
    it('should use call method', async () => {
      const response = await countFiles(jsFile, 'fidoSpeak=bark.call(', 1) 
      expect(response).toBe(true)
    })
  })

  describe('Problem 13 - teachTrick & teachStay', () => {
    it('teachTrick should exist', () => {
      expect(teachTrick).toBeDefined()
    })
    it('teachStay should exist', () => {
      expect(teachStay).toBeDefined()
    })
    it('teachStay should return the correct value', () => {
      expect(teachStay()).toEqual(['sit', 'shake', 'stay'])
    })
    it('should use bind to provide context', async () => {
      const response = await countFiles(jsFile, 'teachStay=teachTrick.bind(', 1)
      expect(response).toBe(true)
    })
  })

  describe('Problem 14 - dogIntro & fidoIntro', () => {
    it('dogIntro should exist', () => {
      expect(dogIntro).toBeDefined()
    })
    it('fidoIntro should exist', () => {
      expect(fidoIntro).toBeDefined()
    })
    it('fidoIntro should contain the correct value', () => {
      expect(fidoIntro).toBe('Fido is a Jack Russell that loves chicken and their tennis ball!')
    })
    it('should use apply to proviude context', async () => {
      const response = await countFiles(jsFile, 'fidoIntro=dogIntro.apply(fido,[', 1)
      expect(response).toBe(true)
    })
  })

  describe('Problem 15 - Phone Constructor', () => {
    it('Phone constructor should exist', () => {
      expect(Phone).toBeDefined()
    })
    it('Phone constructor should work correctly', () => {
      const phoneTest = new Phone('Apple', 'iPhone 11', 128, 'black', false)
      expect(phoneTest.brand).toEqual('Apple')
      expect(phoneTest.model).toEqual('iPhone 11')
      expect(phoneTest.storage).toEqual(128)
      expect(phoneTest.color).toEqual('black')
      expect(phoneTest.sold).toEqual(false)
    })
    describe('phone1', () => {
      it('phone1 should exist', () => {
        expect(phone1).toBeDefined()
      })
      it('phone1 brand should be a string', () => {
        expect(typeof phone1.brand).toBe('string')
      })
      it('phone1 model should be a string', () => {
        expect(typeof phone1.model).toBe('string')
      })
      it('phone1 color should be a string', () => {
        expect(typeof phone1.color).toBe('string')
      })
      it('phone1 storage should be a number', () => {
        expect(typeof phone1.storage).toBe('number')
      })
      it('phone1 sold value should be a boolean', () => {
        expect(typeof phone1.sold).toBe('boolean')
      })
    })
    describe('phone2', () => {
      it('phone2 should exist', () => {
        expect(phone2).toBeDefined()
      })
      it('phone2 brand should be a string', () => {
        expect(typeof phone2.brand).toBe('string')
      })
      it('phone2 model should be a string', () => {
        expect(typeof phone2.model).toBe('string')
      })
      it('phone2 color should be a string', () => {
        expect(typeof phone2.color).toBe('string')
      })
      it('phone2 storage should be a number', () => {
        expect(typeof phone2.storage).toBe('number')
      })
      it('phone2 sold value should be a boolean', () => {
        expect(typeof phone2.sold).toBe('boolean')
      })
    })
    describe('phone3', () => {
      it('phone3 should exist', () => {
        expect(phone3).toBeDefined()
      })
      it('phone3 brand should be a string', () => {
        expect(typeof phone3.brand).toBe('string')
      })
      it('phone3 model should be a string', () => {
        expect(typeof phone3.model).toBe('string')
      })
      it('phone3 color should be a string', () => {
        expect(typeof phone3.color).toBe('string')
      })
      it('phone3 storage should be a number', () => {
        expect(typeof phone3.storage).toBe('number')
      })
      it('phone3 sold value should be a boolean', () => {
        expect(typeof phone3.sold).toBe('boolean')
      })
    })
    it('sell prototype method should exist', async () => {
      const response = await countFiles(jsFile, 'Phone.prototype.sell=', 1)
      expect(response).toBe(true)
    })
    it('sell method should work properly', () => {
      const phoneTest = new Phone('Apple', 'iPhone 11', 128, 'black', false)
      phoneTest.sell()
      expect(phoneTest.sell()).toEqual('Apple iPhone 11 has been sold.')
      expect(phoneTest.sold).toBe(true)
    })
  })

})