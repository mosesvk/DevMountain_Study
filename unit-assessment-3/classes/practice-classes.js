//////////////////PROBLEM 1////////////////////

/*
  You are going to start by making a character class.
  Each character has the following properties:
    - name
    - type
  Each character has the following methods:
    - getInfo
      - This returns a string of 'This is a TYPE character named NAME.'
      - Example: 'This is a robot character named Clank.'

  Call your class Character and receive the data in the constructor in the order listed above. 
  Be sure to match the capitalization and punctuation of the string.
*/

//CODE HERE

class Character {
  constructor(name, type){
    this.name = name; 
    this.type = type;
  }

  getInfo(){
    return `This is a ${this.type} character named ${this.name}.`
  }
}

//////////////////PROBLEM 2////////////////////

/*
  Next, make an NPC (non-player character) class that extends Character
  Each NPC has all of the same properties as a character with the following additional properties:
    - location
    - phrase
  Each NPC has the following additional methods:
    - dialogue
      - This returns a string of 'NAME: PHRASE'
      - Example: 'Porter: What brings a pirate like yourself to this peaceful township?'
      - Make sure to include that colon between name and phrase

  Call your new class NPC
*/

//CODE HERE

class NPC extends Character {
  
  constructor(name, type, location, phrase){
    super(name, type); 

    this.location = location; 
    this.phrase = phrase;
  }

  dialogue(){
    return `${this.name}: ${this.phrase}`
  }
}

/*
    Create an NPC named Ralph who is a human located in Niceland. His phrase should be `I'm gonna wreck it!`. 
    Store your new NPC in a variable called 'ralph'.
*/

//CODE HERE

const ralph = new NPC('Ralph', 'human', 'Niceland', "I'm gonna wreck it!")
/*
    Next you're going to create three variables to store information about Ralph.
    First, make a variable named ralphsInfo whose value will be the invocation of Ralph's getInfo method.
    Second, make a variable named ralphsDialogue whose value will be the invocation of Ralph's dialogue method.
    Third, make a variable named ralphsLocation whose value will be Ralph's location.
*/

//CODE HERE

const ralphsInfo = ralph.getInfo();

const ralphsDialogue = ralph.dialogue();

const ralphsLocation = ralph.location


//////////////////PROBLEM 3////////////////////

/*
  Now you'll make a player class that extends Character 
  Each player has all of the same properties as a character with the following additional properties:
    - healthLevel
    - attackLevel
  Each player has the following additional method:
    - defend(amount)
      - Accepts an amount (another player's attackLevel) as a parameter and subtracts 
        that amount from the current player's healthLevel
      - If the healthLevel is above 0, it should return an object with 3 properties. 
          - The first property should be named 'attackStrength' 
            and should be equal to the amount that the player is defending against.
          - The second property should be named 'remainingHealth' 
            and should be equal to the player's remaining healthLevel.
          - The third property should be named 'message' 
            and should be equal to a string of 'NAME is still in the fight!'
      - Otherwise, it should return a string of 'NAME has been defeated!'

  Call your new class Player
*/

//CODE HERE

class Player extends Character {
  constructor(name, type, healthLevel, attackLevel){
    super(name, type);

    this.healthLevel = healthLevel; 
    this.attackLevel = attackLevel
  }

  defend(amount){
    this.healthLevel -= amount; 
    
    if(this.healthLevel > 0){
      return {
        attackStrength: amount, 
        remainingHealth: this.healthLevel, 
        message: `${this.name} is still in the fight!`
      }
    } else {
      return `${this.name} has been defeated!`
    }

  } 
}

/*
    Next, we'll create two Players.
    Store the first in a variable called aang, his name should be 'Aang' 
    and he's an airbender type with a 100 healthLevel and 100 attackLevel.
    Store the second in a variable called ozai, his name should be 'Ozai' 
    and he's a firebender type with a 100 healthLevel and 0 attackLevel.
*/

//CODE HERE

const aang = new Player('Aang', 'airbender', 100, 100)

const ozai = new Player('Ozai', 'firebender', 100, 0)

/*
    Let's see how a fight between these two would go. 
    Create a variable called 'battle' whose value is Ozai's 
    defend method invoked with Aang's attackLevel passed in as an argument. 
    (You can console log battle to see what happens)
*/

//CODE HERE

const battle = ozai.defend(100)

//////////////////PROBLEM 4////////////////////

/*
  Now you'll make a hero class that extends Player
  Call your new class Hero
  Each hero has all of the same properties as a player with the following additional property:
    - superPowers (an empty array)
  Each hero has the following additional methods:
    - addSuperPower(power)
      - Accepts a power (string) as a parameter and adds it to the hero's superPower array
    - useSuperPower(index)
      - Accepts an index (number) and returns the power at that index in a string of 'NAME used POWER!'
      - Be sure to match the punctuation of the string.
      - Example string: `Wonder Woman used flight!`
*/

//CODE HERE

class Hero extends Player {
  constructor(name, type, healthLevel, attackLevel){
    super(name, type, healthLevel, attackLevel);

    this.superPowers = []
  }

  addSuperPower(power){
    this.superPowers.push(power)
  }

  useSuperPower(index){
    let userPower = this.superPowers[index]
    return `${this.name} used ${userPower}!`
  }
}

/*
  Create a hero named 'Fire Spitter' whose type is 'dragon'. 
  Fire Spitter's healthLevel and attackLevels should both be 5000. 
  Store this information in a variable called fireSpitter.
  After you create Fire Spitter, add three super powers using the addSuperPower method. 
  The first one should be 'spitting fire' and the other two are up to you.
  Last, invoke useSuperPower passing in 0 for the index and store the result in a variable called fireSpitterAttack.
*/

//CODE HERE

const fireSpitter = new Hero('Fire Spitter', 'dragon', 5000, 5000)

fireSpitter.addSuperPower('spitting fire');
fireSpitter.addSuperPower('anti-power');
fireSpitter.addSuperPower('speed');

const fireSpitterAttack = fireSpitter.useSuperPower(0)