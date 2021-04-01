//Helper Functions
const countFiles = async (path, str, count) => {
  const response = await axios.get(
    `http://localhost:6731/api/count?path=${path}&str=${str}&count=${count}`
  )
  return response.data
}

const searchFiles = async (pathArr, strArr) => {
  const response = await axios.post(`http://localhost:6731/api/search`, {
    pathArr,
    strArr,
  })
  return response.data
}

//path to the file from the server
const jsFile = 'classes/practice-classes.js'

//Test Suite
describe(`Unit Assessment 3 - Classes`, () => {
  describe(`Problem 1 - Character class`, () => {
    it(`Character class should exist`, () => {
      expect(Character).toBeDefined()
    })
    it(`sets properties in the constructor using 'this'`, async () => {
      const response = await searchFiles(
        [jsFile],
        ['this.name=name', 'this.type=type']
      )
      expect(response).toBe(true)
    })
    it(`getInfo should be a function`, () => {
      const char = new Character(`Luigi`, `human`)
      expect(typeof char.getInfo).toBe(`function`)
    })
    describe(`We'll run a test invoking the Character class and passing in 'Luigi' and 'human'`, () => {
      const char = new Character(`Luigi`, `human`)
      it('resulting character should have the name Luigi', () => {
        expect(char.name).toBe(`Luigi`)
      })
      it('resulting character should have the type human', () => {
        expect(char.type).toBe(`human`)
      })
      it('should be able to run the getInfo method off Luigi and get the correct sentence', () => {
        expect(char.getInfo()).toBe(`This is a human character named Luigi.`)
      })
    })
  })

  describe(`Problem 2 - NPC class`, () => {
    it(`NPC class should exist`, () => {
      expect(NPC).toBeDefined()
    })
    it(`should extend the Character class`, async () => {
      const response = await countFiles(jsFile, 'classNPCextendsCharacter')
      expect(response).toBe(true)
    })
    it(`calls super in the constructor`, async () => {
      const responseOne = await countFiles(jsFile, 'super(name,type)'),
        responseTwo = await countFiles(jsFile, 'super(type,name)')
      expect(responseOne || responseTwo).toBe(true)
    })
    it(`dialogue should be a function`, () => {
      const npc = new NPC(`Agnona`, `dwarf`, `tavern`, `What'll it be?`)
      expect(typeof npc.dialogue).toBe(`function`)
    })
    describe(`We'll run a test invoking the NPC class and passing in 'Agnona', 'dwarf', 'tavern', and 'What'll it be?' as arguments`, () => {
      const npc = new NPC(`Agnona`, `dwarf`, `tavern`, `What'll it be?`)
      it(`resulting NPC's name should be Agnona`, () => {
        expect(npc.name).toBe(`Agnona`)
      })
      it(`resulting NPC's type should be dwarf`, () => {
        expect(npc.type).toBe(`dwarf`)
      })
      it(`resulting NPC's location should be tavern`, () => {
        expect(npc.location).toBe(`tavern`)
      })
      it(`resulting NPC's phrase should be "What'll it be?"`, () => {
        expect(npc.phrase).toBe(`What'll it be?`)
      })
      it(`resulting NPC's dialogue method should return the correct string`, () => {
        expect(npc.dialogue()).toBe(`Agnona: What'll it be?`)
      })
    })
    describe(`ralph exists and contains correct values`, () => {
      it(`ralph should be defined`, () => {
        expect(ralph).toBeDefined()
      })
      it(`name should be Ralph`, () => {
        expect(ralph.name).toBe(`Ralph`)
      })
      it(`type should be human`, () => {
        expect(ralph.type).toBe(`human`)
      })
      it(`location should be Niceland`, () => {
        expect(ralph.location).toBe(`Niceland`)
      })
      it(`phrase should be "I'm gonna wreck it!"`, () => {
        expect(ralph.phrase).toBe(`I'm gonna wreck it!`)
      })
    })
    describe(`ralph's info, dialogue, and location variables contain the correct values`, () => {
      it(`ralphsInfo should be the string: This is a human character named Raplh.`, () => {
        expect(ralphsInfo).toBe(`This is a human character named Ralph.`)
      })
      it(`ralphsDialogue should be "Ralph: I'm gonna wreck it!"`, () => {
        expect(ralphsDialogue).toBe(`Ralph: I'm gonna wreck it!`)
      })
      it(`ralphsLocation should be Niceland`, () => {
        expect(ralphsLocation).toBe(`Niceland`)
      })
    })
  })

  describe('Problem 3 - Player class', () => {
    describe(`Player class setup`, () => {
      it(`Player class should exist`, () => {
        expect(Player).toBeDefined()
      })
      it(`should extend the Character class`, async () => {
        const response = await countFiles(jsFile, 'classPlayerextendsCharacter')
        expect(response).toBe(true)
      })
      it(`calls super in the constructor`, async () => {
        const responseOne = await countFiles(jsFile, 'super(name,type)', 2),
          responseTwo = await countFiles(jsFile, 'super(type,name)', 2)
        expect(responseOne || responseTwo).toBe(true)
      })
      it(`defend method functions correctly`, () => {
        const player = new Player('Yenza', 'Cloral', 100, 100),
          attackResult = player.defend(30)
        expect(attackResult.attackStrength).toEqual(30)
        expect(attackResult.message).toEqual('Yenza is still in the fight!')
        expect(attackResult.remainingHealth).toEqual(70)
      })
    })

    describe(`We'll run a test invoking Player and passing in 'Yenza', 'Cloran', and 100 for both health and attack levels`, () => {
      const player = new Player('Yenza', 'Cloran', 100, 100)
      it(`resulting player's name should be Yenza`, () => {
        expect(player.name).toBe('Yenza')
      })
      it(`resulting player's type should be Cloran`, () => {
        expect(player.type).toBe('Cloran')
      })
      it(`resulting player's health should be 100`, () => {
        expect(player.healthLevel).toBe(100)
      })
      it(`resulting player's attack should be 100`, () => {
        expect(player.attackLevel).toBe(100)
      })
      it(`resulting player's defend method should exist`, () => {
        expect(player.defend).toBeDefined()
      })
      it(`resulting player's defend should be a function`, () => {
        expect(typeof player.defend).toBe('function')
      })
    })

    describe(`aang`, () => {
      it(`should exist`, () => {
        expect(aang).toBeDefined()
      })
      it(`name should be Aang`, () => {
        expect(aang.name).toBe('Aang')
      })
      it(`type should be airbender`, () => {
        expect(aang.type).toBe('airbender')
      })
      it(`healthLevel should be 100`, () => {
        expect(aang.healthLevel).toBe(100)
      })
      it(`attackLevel should be 100`, () => {
        expect(aang.attackLevel).toBe(100)
      })
    })

    describe(`ozai`, () => {
      it(`should exist`, () => {
        expect(ozai).toBeDefined()
      })
      it(`name should be Ozai`, () => {
        expect(ozai.name).toBe('Ozai')
      })
      it(`type should be firebender`, () => {
        expect(ozai.type).toBe('firebender')
      })
      it(`healthLevel should be 100`, () => {
        //when they create ozai, health should 100, but after the battle(), it will be 0
        let result = false
        if (ozai.healthLevel === 0 || ozai.healthLevel === 100) {
          result = true
        }
        expect(result).toBe(true)
      })
      it(`attackLevel should be 0`, () => {
        expect(ozai.attackLevel).toBe(0)
      })
    })

    describe(`battle`, () => {
      it(`should exist`, () => {
        expect(battle).toBeDefined()
      })
      it(`should result in 'Ozai has been defeated!'`, () => {
        expect(battle).toBe(`Ozai has been defeated!`)
      })
    })
  })

  describe(`Problem 4 - Hero class`, () => {
    describe(`Hero class setup`, () => {
      it(`class should exist`, () => {
        expect(Hero).toBeDefined()
      })
      it(`calls super in the constructor`, async () => {
        const response = await countFiles(jsFile, 'super(', 3)
        expect(response).toBe(true)
      })
      it(`addSuperPower should exist`, () => {
        const hero = new Hero(`Wonder Woman`, `demigod`, 100, 100)
        expect(hero.addSuperPower).toBeDefined()
      })
      it(`addSuperPower should be a function`, () => {
        const hero = new Hero(`Wonder Woman`, `demigod`, 100, 100)
        expect(typeof hero.addSuperPower).toBe('function')
      })
      it(`useSuperPower should exist`, () => {
        const hero = new Hero(`Wonder Woman`, `demigod`, 100, 100)
        expect(hero.useSuperPower).toBeDefined()
      })
      it(`useSuperPower should be a function`, () => {
        const hero = new Hero(`Wonder Woman`, `demigod`, 100, 100)
        expect(typeof hero.useSuperPower).toBe('function')
      })
    })

    describe(`We'll run a test invoking Hero and passing in 'Wonder Woman', 'demigod', and 1000 for both health and attack levels`, () => {
      const hero = new Hero(`Wonder Woman`, `demigod`, 1000, 1000)
      it(`resulting hero's name should be Wonder Woman`, () => {
        expect(hero.name).toBe(`Wonder Woman`)
      })
      it(`resulting hero's type should be demigod`, () => {
        expect(hero.type).toBe(`demigod`)
      })
      it(`resulting hero's health should be 1000`, () => {
        expect(hero.healthLevel).toBe(1000)
      })
      it(`resulting hero's attack should be 1000`, () => {
        expect(hero.attackLevel).toBe(1000)
      })
      it(`resulting hero should have a superPowers array`, () => {
        expect(typeof hero.superPowers).toBe(`object`)
      })
      it(`should be able to use addSuperPower on resulting hero`, () => {
        hero.addSuperPower('flying')
        expect(hero.superPowers.length).toBe(1)
      })
      it(`useSuperPower should return the correct string`, () => {
        const result = hero.useSuperPower(0)
        expect(result).toBe('Wonder Woman used flying!')
      })
    })
    describe(`fireSpitter`, () => {
      it(`should exist`, () => {
        expect(fireSpitter).toBeDefined()
      })
      it(`should have name Fire Spitter`, () => {
        expect(fireSpitter.name).toBe('Fire Spitter')
      })
      it(`should have type dragon`, () => {
        expect(fireSpitter.type).toBe('dragon')
      })
      it(`should have healthLevel 5000`, () => {
        expect(fireSpitter.healthLevel).toBe(5000)
      })
      it(`should have attackLevel 5000`, () => {
        expect(fireSpitter.attackLevel).toBe(5000)
      })
      it(`should have three super powers`, () => {
        expect(fireSpitter.superPowers.length).toBe(3)
      })
      it(`fireSpitterAttack should use 'spitting fire' and result in the correct string`, () => {
        expect(fireSpitterAttack).toBe(`Fire Spitter used spitting fire!`)
      })
    })
  })
})
