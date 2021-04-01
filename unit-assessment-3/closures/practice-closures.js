  ////////////PROBLEM 1////////////
  
  /*
    Write a function called myFunc. 
    Inside the function, we'll create a variable and another function. 
    Call the variable myStr and set it to the string 'super secret string'. 
    Call the function getSecretString and have it return the myStr variable. 
    myFunc should return getSecretString
  */
  
  //CODE HERE

  function myFunc(){
    let myStr = 'super secret string'; 

    let getSecretString = function(){
      return myStr;
    }
    return getSecretString //Make sure that you don't need the parenthesis becuase we are returning the variable and not the function
  }
  
  //Now create a variable called secretString. Its value should be the invocation of myFunc.

  //CODE HERE
  

  const secretString = myFunc()
  
  ////////////PROBLEM 2////////////

  /*
    Write a function called lightSwitch. It will return an inner function.
    Create a variable inside lightSwitch called isTheLightOn and set its initial value to the boolean false. 
    Write a function called flipTheSwitch inside lightSwitch. 
    The function should invert the value of isTheLightOn and return a string. 
    If the light is on (true), the string should be 'The light is on'
    And if the light is off (false), the string should be 'The light is off'. 
    The lightSwitch function should return flipTheSwitch.
  */
  
  //CODE HERE

    function lightSwitch(){
      let isTheLightOn = false; 
      function flipTheSwitch(){
        isTheLightOn = !isTheLightOn; //This is the toggle step that reverses whatever we declared on line 44. So this is saying that it's true now since on line 44 is false
        if (isTheLightOn){
          return 'The light is on'
        } else {
          return 'The light is off'
        }
      }
      return flipTheSwitch
    }
  
  //Create a variable called kitchenSwitch whose value is the invocation of lightSwitch.
  
  //CODE HERE

  const kitchenSwitch = lightSwitch()

  //Invoke kitchenSwitch.

  //CODE HERE
  
  kitchenSwitch(false)
  
  //Create a variable called bathroomSwitch whose value is the invocation of lightSwitch. 

  //CODE HERE
  
  const bathroomSwitch = lightSwitch()
  
  //Invoke bathroomSwitch twice.
  
  //CODE HERE

  
  
  ////////////PROBLEM 3////////////

  /*
    Use the module pattern to create a plant height tracker, name your function 'plantTracker'
    Set up two variables inside plantTracker, 'plant' which should be set to 'fern' and 'height' which should be set to 12
    Return 3 functions using the module pattern
      - 'readInfo' should return a string of 'This is a PLANT plant that is HEIGHT inches tall.', where PLANT is the value of the plant variable and HEIGHT is the value of the height variable.
      - 'waterPlant' should add 1 to the height and return the new height
      - 'prunePlant' should subtract 1 from the height and return the new height
  */

  //CODE HERE

  function plantTracker() {
    let plant = 'fern';
    let height = 12;

    return {
      readInfo() {
        return `This is a ${plant} plant that is ${height} inches tall.`
      }, //Remember that we don't need to do the 'this.plant/this.height' because we did NOT put those variables within a constructor 
      waterPlant() {
        return height += 1; 
      }, 
      prunePlant() {
        return height -= 1; 
      }
    }
  }




  ////////////PROBLEM 4////////////

  /*
    Use the module pattern to create an inventory, name the function 'inventory'
    Set up a variable inside inventory called 'products' initialized as an empty array.  
    Return 3 functions using the module pattern
      - 'readProducts' should return the products array
      - 'addToProducts' should receive one argument, a string, and add it into the products array
      - 'deleteFromProducts' should receive one argument, a string, and delete it from the products array
        - hint: try to find the index of the string first
  */

  //CODE HERE

  function inventory() {
    let products = []; 

    return {
      readProducts(){
        return products
      }, 
      addToProducts(str){
        products.push(str)
      },
      deleteFromProducts(str){
        let index = products.indexOf(str); 
        products.splice(index, 1)
      }
    }
  }

  /*
    Create a variable called 'shoes' whose value is the invocation of inventory.
  */

  //CODE HERE

  const shoes = inventory()

  /*
    Add an item to your shoes array using the addToProducts function
  */

  //CODE HERE

shoes.addToProducts('nike')