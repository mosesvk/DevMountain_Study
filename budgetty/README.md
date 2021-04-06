<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project, we'll be adding redux to a budget app. Instead of just using redux alone, we'll use `react-redux`, `redux-promise-middleware`, and `combineReducers`.

## Step 1

## Summary

In this step, we'll get the project set up.

## Instructions

* Fork and clone this repo.
* Run `npm install`. If you look at the package.json file, you'll notice that `redux`, `react-redux`, and `redux-promise-middleware` are listed as dependecies. These are installed when you run `npm install`.
* Create a `.env` file in the root of the project with a `SERVER_PORT` of `4000` and a `SESSION_SECRET` of any value you want.
* Run `nodemon`.
* Run `npm start` in a separate terminal instance.

In the browser, you should see a login page for the project.

* Log in using the email **`peterquill@gmail.com`**. The password is **`starlord`**.

When you get to the `my-budget` route, you'll see a loading animation. This loading animation will not go away until we set up redux.

## Step 2

### Summary

In this step, we'll set up a redux store and add in some middleware so that we can have asychronous code in our action creators.

### Instructions

* In the `src` folder, add a folder and name it `ducks`.
* Add a file in the ducks folder and name it `budgetReducer.js`

In budgetReducer.js:
* Create an `initialState` variable with the following properties. This variable will eventually be passed into the reducer function to set an initial state for the store:

  ```
  {
    purchases: [],
    budgetLimit: null,
    loading: false
  }
  ```
* Create a function called reducer that takes in two parameters, `state` and `action`. Your function should return `state`.
* `initialState` should be the default value for the state parameter.
* `export default` the reducer function.

Now we'll create the store.

* In the `ducks` folder, create a file named `store.js`
* import `createStore`, `combineReducers` and `applyMiddleware` from redux
* import redux-promise-middleware as `promiseMiddleware`
* import the reducer from `budgetReducer.js` as `budgetReducer`
* Create a variable called `rootReducer`. It's value will be the result of calling `combineReducers` and passing in an object with a key-value pair of `budget: budgetReducer`.

  ```
  const rootReducer = combineReducers({
    budget: budgetReducer
  })
  ```
* export as default the created store using `createStore`. The first argument to the createStore function should be `rootReducer`. The second argument should be `applyMiddleware(promiseMiddlware)`


Now we can go connect the redux part of our app to the react part.

In index.js
* Import `Provider` from 'react-redux'.
* Import the `store` from './store.js'
* Wrap the App component with the `Provider` component.
* Give the `Provider` component a `store` prop. The value of the store prop should be the imported store.

Now, open your console. You should not see any errors in your app at this point. Warnings may be fine, but double-check your app to be sure. 

### Solution

<details>
<summary> <code> budgetReducer.js </code> </summary>

```
// CREATE AN INITIAL STATE OBJECT THAT WILL BE PASSED THROUGH THE REDUCER TO SET AN INITIAL STATE FOR THE STORE
const initialState = {
  purchases: [],
  budgetLimit: null,
  loading: false
}

	
// EXPORT DEFAULT A REDUCER FUNCTION THAT RETURNS A STATE OBJECT
export default function reducer(state = initialState, action) {
  return state;
}
```
</details>

<details>
<summary> <code> store.js </code> </summary>

```
// IMPORT THE REDUX FUNCTIONS, MIDDLEWARE, AND REDUCERS THAT WILL BE USED TO CREATE A STORE
import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import budgetReducer from './budgetReducer';


// USE COMBINE REDUCERS TO COMBINE REDUCERS INTO A SINGLE, "ROOT" REDUCER THAT WILL BE USED BY THE STORE. EVENTUALLY YOU MAY HAVE MULTIPLE REDUCERS IN AN APPLICATION, AND THIS STEP HELPS US COMBINE THOSE INTO ONE ROOT REDUCER THAT CAN BE USED TO CREATE A STORE
const rootReducer = combineReducers({
  budget: budgetReducer
})

// CREATE THE STORE USING THE CREATE STORE FUNCTION. PASS IN THE APPROPRIATE ARGUMENTS.
// YOU ARE EXPORTING IT SO THAT IT CAN BE USED BY THE PROVIDER COMPONENT LATER ON
export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
```
</details>

<details>
<summary> <code>index.js </code> </summary>

```
// IMPORT THE PROVIDER COMPONENT FROM REACT-REDUX AND THE STORE
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';

// WRAPPING THE APP COMPONENT IN THE PROVIDER COMPONENT GIVES THE ENTIRE APPLICATION ACCESS TO WHATEVER IS IN THE STORE, BECAUSE WE PASS IN THE STORE AS A PROP TO THE PROVIDER, AND WRAP OUR PROVIDER AROUND OUR APP
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

```
</details>

## Step 3

### Summary

In this step, we'll make the loading animation dependent on the redux store's `loading` property.

### Instructions

In Budget.js:
* Import connect from 'react-redux';
* Underneath your class component, but above your export default statement, create a `mapStateToProps` function that takes in a parameter called `state` from the redux store. The function should return an object with a key of `budget` that has a value of `state.budget`.  
* Connect the Budget component to the redux store using the `connect` function from 'react-redux'.
* In the mapStateToProps function, return an object with a budget property and value of the budget slice of state from the redux store.

All redux store state values managed by the `budgetReducer` are now on `this.props.budget` of the props object of your Budget component, including the `loading` property in the redux store. This is becaused we have mapped the redux store state to the props object of your component through the mapStateToProps function we just created after connecting our component to the redux store with the `connect` method.

Next, in order to enable the loading animation:

* Destructure `loading` from the props object inside render
* Locate the ternary in the JSX that is conditionally rendering the loading animation. Update this code to use the `loading` property to check whether or not the Loading component should be displayed.

<details>
<summary> <code>Budget.js </code> </summary>

```
import React, { Component } from 'react';
import Background from './../shared/Background/Background'
import Chart1 from './../shared/Chart1';
import Chart2 from './../shared/Chart2';
import AddPurchase from './../shared/AddPurchase';
import DisplayPurchases from './../shared/DisplayPurchases';
import Loading from './../shared/Loading/Loading';
import Nav from './../shared/Nav';
import './Budget.css';
import { connect } from 'react-redux'


class Budget extends Component {

  render() {
  // DESTRUCTURE THE LOADING PROPERTY FROM THE BUDGET OBJECT THAT WAS MAPPED TO PROPS THROUGH MAPSTATETOPROPS/CONNECT
    const { loading } = this.props.budget;
    return (
      <Background>
        // UPDATE THE TERNARY TO CHECK WHETHER OR NOT THE LOADING PROPERTY 
        // ON THE BUDGET OBJECT IS TRUE. IF SO, THEN THE LOADING COMPONENT
        // SHOULD BE DISPLAYED
        {loading ? <Loading /> : null}
        <div className='budget-container'>
          <Nav />
          <div className='content-container'>
            <div className="purchases-container">
              <AddPurchase />
              <DisplayPurchases />
            </div>
            <div className='chart-container'>
              <Chart1 />
              <Chart2 />
            </div>
          </div>
        </div>
      </Background>
    )
  }
}

// THIS FUNCTION TAKES IN THE REDUX STORE STATE AND MAPS THE BUDGET REDUCER INFO 
// FROM THE REDUX STORE TO A BUDGET KEY ON THIS COMPONENT'S PROPS OBJECT
function mapStateToProps(state) {
  return {
    budget: state.budget
  }
}

	
// THE CONNECT METHOD TAKES IN THE MAPSTATETOPROPS FUNCTION AND CONNECTS THIS COMPONENT TO THE REDUX STORE
export default connect(mapStateToProps)(Budget);

```
</details>

## Step 4

### Summary

In this step, we'll create a second reducer to manage the logged in user's data.

### Instructions

* Create a new file named `userReducer.js` in the `ducks` folder

In userReducer.js:
* Create an initialState object with the following key/value pairs: `email: null`, `firstName: null`, and `lastName: null`
* Create and `export default` a reducer function that takes in `state` and `action` as parameters. `initialState` should be the default value for `state` parameter passed in.
* The reducer function should return `state`.

In store.js:

* Import the user reducer function from `userReducer.js`.
* Add it to the rootReducer object using a property called `user`

### Solution

<details>
<summary> <code>userReducer.js </code> </summary>

```
// CREATE AN INITIAL STATE OBJECT THAT WILL EVENTUALLY BE USED TO SET AN INITIAL STATE PROPERTY ON THE REDUX STORE AFTER BEING PASSED THROUGH THE REDUCER
const initialState = {
  email: null,
  firstName: null,
  lastName: null
};


// EXPORT DEFAULT A REDUCER FUNCTION THAT RETURNS A STATE OBJECT TO THE STORE
export default function reducer(state = initialState, action) {
  return state;
}
```
</details>
<details>
<summary> <code>store.js </code> </summary>

```
import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import budgetReducer from './budgetReducer';
// IMPORT THE USER REDUCER
import userReducer from './userReducer';

	
// ADD THE USER REDUCER TO THE ROOT REDUCER OBJECT THAT WILL BE USED TO CREATE THE REDUX STORE STATE
const rootReducer = combineReducers({
  budget: budgetReducer,
  user: userReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
```
</details>

## Step 5

### Summary

In this step, we'll get the logged in user's data from the server, store that info in the redux store, and display the user's first and last name in the nav bar.


### Instructions

In userReducer.js:
* Import axios from 'axios'
* Create an action type named `REQUEST_USER_DATA`
* Create an action creator function (named `requestUserData`) that first makes an axios get request for user data, and stores that data to a new variable named `data`;
  * Method: GET
  * URL: '/auth/user-data'
* The action creator should return an "action" object that has `type` and `payload` properties. The payload should be the `data` variable you you assigned above that is storing the response data from the axios request. 
  * Make sure you're returning `res.data` from the callback passed to the `.then()` of your axios request as shown below.
    ```
    export const requestUserData = () => {
    let data = axios.get('/auth/user-data').then(res => res.data)
      return {
        type: REQUEST_USER_DATA,
        payload: data
      }
    }
    ```

* Update the reducer function to have a `switch` statement that returns an object based on the value of the `action.type` passed in.
* When the `REQUEST_USER_DATA` action type is fulfilled, return a new object with email, firstName, and lastName properties from the user object in the action payload (i.e. `action.payload.user`). In the solution below, the values for `email`, `firstName`, and `lastName` have been destructured from the payload before being returned by the reducer function as a new state object.
* In the `default` case, just return `state`. 

__NOTE__: You should try using the "Network" tab in the chrome developer tools to check what responses look like from http requests. You can also look below to see what the response looks like, but familiarizing yourself now with the chrome developer tools will help you in the future.

<details>
<summary>Response object from HTTP request</summary>

```
Response Object:

{
  ...,
  data: {
    user: {
      email: 'someEmail',
      firstName: 'name',
      lastName: 'name'
    }
  }
}

```
</details>


In Budget.js:

* In `mapStateToProps`, make sure you are getting the user data from the redux store onto the props object
  
  ```
  function mapStateToProps(state) {
    return {
      budget: state.budget,
      user: state.user
    }
  }
  ```
* Import the action creator (`requestUserData`) from userReducer.js.
* The second argument to the `connect` method at the bottom of your file should be an object that takes in all of the action creators from your reducers and provides access to these actions in `this.props`. In your component itself, you will want to invoke the version of the `requestUserData` function that is now on `this.props`, not the one directly from the userReducer.js file.

After the `this.props.requestUserData` function runs in the `componentDidMount` method, the http request will be sent for the user data. When the user data comes back, the redux store gets updated, which triggers a re-rendering of the `Budget` component, and sets the value of the `this.props.budget` object to have the updated values that are now on the redux store. 

* The Nav component is expecting a firstName and lastName prop. Pass the appropriate data as props from the information stored on the redux store. 

After completing this step, you should see the logged in user's name next to the picture in the corner.

### Solution

<details>
<summary><code> userReducer.js </code> </summary>

```
import axios from 'axios';

const initialState = {
  email: null,
  firstName: null,
  lastName: null
};

//CREATE THE BASE ACTION TYPES YOU WILL USE
const REQUEST_USER_DATA = 'REQUEST_USER_DATA'


// THE ACTION CREATOR HERE DEFINES AN ACTION TYPE AND PAYLOAD THAT WILL BE USED BY THE REDUCER FUNCTION
// TO UPDATE VALUES IN THE REDUX STORE. THIS FUNCTION ITSELF WILL BE INVOKED IN A 
// COMPONENT VIA PROPS ONCE THAT COMPONENT HAS CONNECTED TO IT VIA THE CONNECT METHOD
export const requestUserData = () => {
  let data = axios.get('/auth/user-data').then(res => res.data)
  return {
    type: REQUEST_USER_DATA,
    payload: data
  }
}

export default function reducer(state = initialState, action) {
// USING A SWITCH STATEMENT INSIDE OF THIS FUNCTION ENABLES THE REDUX STORE TO UPDATE ITS STATE DYNAMICALLY BASED ON THE ACTION TYPE PASSED IN. THIS FUNCTION RUNS WHEN THE ACTION CREATORS ARE INVOKED IN A COMPONENT.

// NOTE: YOU USE THE PROMISE BASED SYNTAX '_FULFILLED' BECAUSE 'FULFILLED'/'PENDING'/'REJECTED' IS ADDED BY REDUX-PROMISE  MIDDLEWARE WHEN MAKING PROMISE BASED REQUESTS (REQUESTS THAT RECEIVE RESPONSES) THROUGH REDUX. ACTIONS THAT AREN'T RELATED TO PPROMISE BASED REQUESTS SHOULD NOT HAVE 'FULFILLED'/'PENDING'/'REJECTED' CONCATENATED TO THEM. IF YOU DIDN'T USE REDUX-PROMISE-MIDDLEWARE, YOU SHOULD ALSO NOT CONCATENATE THOSE STRINGS.

  switch (action.type) {
    case REQUEST_USER_DATA + '_FULFILLED':
      const { email, firstName, lastName } = action.payload.user
      return { email, firstName, lastName };
    default:
      return state;
  }
}

```
</details>

<details>
<summary><code>Budget.js</code></summary>

```
import React, { Component } from 'react';
import Background from './../shared/Background/Background'
import Chart1 from './../shared/Chart1';
import Chart2 from './../shared/Chart2';
import AddPurchase from './../shared/AddPurchase';
import DisplayPurchases from './../shared/DisplayPurchases';
import Loading from './../shared/Loading/Loading';
import Nav from './../shared/Nav';
import './Budget.css';
import { connect } from 'react-redux'
// IMPORT THE ACTION CREATOR FROM THE REDUCER FILE FOR USE BY THE CONNECT METHOD, WHICH THEN ADDS THE FUNCTION TO THE PROPS // OBJECT OF THIS COMPONENT
import { requestUserData } from './../../ducks/userReducer'


class Budget extends Component {

  componentDidMount() {
  // WHEN THE COMPONENT MOUNTS, THE ACTION CREATOR IS INVOKED, THE REDUCER FUNCTION FIRES, AND STATE IS UPDATED ACCORDINGLY   // IN THE REDUX STORE
    this.props.requestUserData()
  }

  render() {
    const { loading } = this.props.budget;
    const { firstName, lastName } = this.props.user;
    return (
      <Background>
        {loading ? <Loading /> : null}
        <div className='budget-container'>
          <Nav firstName={firstName} lastName={lastName} />
          <div className='content-container'>
            <div className="purchases-container">
              <AddPurchase />
              <DisplayPurchases />
            </div>
            <div className='chart-container'>
              <Chart1 />
              <Chart2 />
            </div>
          </div>
        </div>
      </Background>
    )
  }
}

function mapStateToProps(state) {
  return {
    budget: state.budget,
    user: state.user
  }
}

// IN ORDER TO ACCESS THE REQUESTUSERDATA ACTION CREATOR, YOU NEED TO CONNECT IT TO
// THE REDUCER FUNCTION THROUGH THE CONNECT METHOD. THE CONNECT METHOD ACCEPTS TWO ARGUMENTS, A MAPSTATETOPROPS OBJECT, AND A MAPDISPATCHTOPROPS OBJECT. OUR DISPATCHED ACTIONS GO INSIDE OF THE SECOND ARGUMENT OBJECT AS A KEY/VALUE PAIR. 
export default connect(mapStateToProps, { requestUserData })(Budget);

```
</details>

## Step 6

### Summary

In this step, we'll get the budgetData from the server to be displayed.

### Instructions

In budgetReducer.js:

* import axios from 'axios'
* Create action type called `REQUEST_BUDGET_DATA`
* Create an action creator named `requestBudgetData` that makes a get request for budget data, returns the data from the response, and stores that data to a variable named `data`.
  * Method: `GET`
  * URL: `/api/budget-data`
  * Make sure you return `res.data` from the callback passed into the `.then` of your get request
  * Return an action object from `requestBudgetData` with `type` and `payload` properties. The value of `payload` should be the data variable from above.
* Update the reducer function to have a `switch` statement that returns an object based on the value of `action.type`.
  * While the http request is pending, `loading` should be true
  * When the http request is fulfilled, update the redux store state using the `action.payload`, and change `loading` back to false.
  * In the `default` case, just return `state`. 

In Budget.js:

* Import `requestBudgetData` from budgetReducer.js
* Add `requestBudgetData` to the second arg in the connect method.
* Invoke `this.props.requestBudgetData` in the componentDidMount method.

The budget data from the http request is now in the redux store, and because of mapStateToProps, is also on the this.props object. 

* `this.props.budget.purchases` needs to be passed to the `DisplayPurchases`, `Chart1`, and `Chart2` components. The name of the prop needs to be `purchases`.
* `budgetLimit` from the props object needs to be passed to `Chart1` on a prop called `budgetLimit`.
* The solution below destructures purchases and budgetLimit from `this.props.budget`

You should now see some dummy data appearing as well as the charts reacting to that data.

### Solution

<details>
<summary><code>budgetReducer.js </code> </summary>

```
import axios from 'axios';

const initialState = {
  purchases: [],
  budgetLimit: null,
  loading: false
};

//CREATE THE BASE ACTION TYPES THAT WILL BE USED
const REQUEST_BUDGET_DATA = 'REQUEST_BUDGET_DATA';

// SET UP AN ACTION CREATOR THAT RETURNS AN ACTION OBJECT WITH A TYPE AND PAYLOAD PROPERTY
export const requestBudgetData = () => {
  let data = axios.get('/api/budget-data').then(res => res.data)
  return {
    type: REQUEST_BUDGET_DATA,
    payload: data
  }
}

export default function budgetReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_BUDGET_DATA + '_PENDING':
    // IN ORDER TO KEEP VALUES PREVIOUSLY STORED ON STATE, WE SPREAD THE CURRENT STATE OBJECT
    // INTO THE RETURNED OBJECT AND UPDATE ONLY THE VALUES IN STATE WE WANT TO CHANGE
      return { ...state, loading: true }
    case REQUEST_BUDGET_DATA + '_FULFILLED':
      return { ...state, ...action.payload, loading: false }
    default:
      return state;
  }
}

```
</details>
<details><summary><code>Budget.js </code> </summary>

```
import React, { Component } from 'react';
import Background from './../shared/Background/Background'
import Chart1 from './../shared/Chart1';
import Chart2 from './../shared/Chart2';
import AddPurchase from './../shared/AddPurchase';
import DisplayPurchases from './../shared/DisplayPurchases';
import Loading from './../shared/Loading/Loading';
import Nav from './../shared/Nav';
import './Budget.css';
import { connect } from 'react-redux'
import { requestUserData } from './../../ducks/userReducer'
import { requestBudgetData } from './../../ducks/budgetReducer'


class Budget extends Component {
  componentDidMount() {
    this.props.requestUserData();
    this.props.requestBudgetData();
  }

  render() {
  // DESTRUCTURING VALUES HERE IS OPTIONAL BUT RECOMMENDED FOR CLEANER JSX
    const { loading, purchases, budgetLimit } = this.props.budget;
    const { firstName, lastName } = this.props.user;
    return (
      <Background>
        {loading ? <Loading /> : null}
        <div className='budget-container'>
          <Nav firstName={firstName} lastName={lastName} />
          <div className='content-container'>
            <div className="purchases-container">
              <AddPurchase />
              <DisplayPurchases purchases={purchases} />
            </div>
            <div className='chart-container'>
              <Chart1 purchases={purchases} budgetLimit={budgetLimit} />
              <Chart2 purchases={purchases} />
            </div>
          </div>
        </div>
      </Background>
    )
  }
}

function mapStateToProps(state) {
  return {
    budget: state.budget,
    user: state.user
  }
}

export default connect(mapStateToProps, { requestUserData, requestBudgetData })(Budget);

```
</details>


## Step 7

### Summary

In this step, we'll create two more action creators so that we can add and remove purchases from our budget app.

### Instructions

In budgetReducer.js:

* Create an action type called `ADD_PURCHASE`.
* Create an action creator named `addPurchase` that will make an http request to add a new purchase.
* Create action type for `addPurchase`.
  * Parameters of `addPurchase` (in order):
    * `price`
    * `description`
    * `category`
  * Method: POST
  * URL: '/api/budget-data/purchase'
  * Body of request
    ```
    { description, price, category }
    ```
* addPurchase should return an action object with a `type` and `payload`.


Update the switch statement: 
* While the request is pending, `loading` should be set to `true`
* When the request is fulfilled, update state and the purchases property using the `action.payload`, and change `loading` back to `false`.

Now for the last action creator.

* Create an action type called `REMOVE_PURCHASE`.
* Create an action creator named `removePurchase` that will make an http request to remove a purchase.
* Create action type for `removePurchase`.
  * `removePurchase` will have an `id` parameter
  * Method: DELETE
  * URL: '/api/budget-data/purchase/:id'
* removePurchase should return action object.

Update the switch statement: 
* When request is pending, `loading` should be set to `true`
* When requst is fulfilled, update state properly and change `loading` back to `false`.


In Budget.js:
* Import both action creators you just made and add them to the action creator object (2nd arg in connect method).
* Pass `this.props.addPurchase` to the `AddPurchase` component on a prop called `addPurchase`.

When the `Add` button is clicked, the AddPurchase component will invoke this.props.addPurchase and pass in the price, description, and category as arguments. Take a look at the AddPurchase component if you want (line 27).

* Pass `this.props.removePurchase` to the DisplayPurchases component on a props called `removePurchase`.

Go ahead and try adding and removing purchases. You should see the charts react as data is added and removed.

### Solution

<details>
<summary> <code>budgetReducer.js </code> </summary>

```

import axios from 'axios';

const initialState = {
  purchases: [],
  budgetLimit: null,
  loading: false
};

const REQUEST_BUDGET_DATA = 'REQUEST_BUDGET_DATA';
const ADD_PURCHASE = 'ADD_PURCHASE';
const REMOVE_PURCHASE = 'REMOVE_PURCHASE'

export const requestBudgetData = () => {
  let data = axios.get('/api/budget-data').then(res => res.data)
  return {
    type: REQUEST_BUDGET_DATA,
    payload: data
  }
}

export const addPurchase = (price, description, category) => {
  let data = axios.post('/api/budget-data/purchase', {
    description,
    price,
    category
  }).then(res => res.data);
  return {
    type: ADD_PURCHASE,
    payload: data
  }
}

export const removePurchase = (id) => {
  let data = axios.delete(`/api/budget-data/purchase/${id}`).then(res => res.data);
  return {
    type: REMOVE_PURCHASE,
    payload: data
  }
}

export default function budgetReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_BUDGET_DATA + '_PENDING':
      return { ...state, loading: true }
    case REQUEST_BUDGET_DATA + '_FULFILLED':
      return { ...state, ...action.payload, loading: false }
    case ADD_PURCHASE + '_PENDING':
      return { ...state, loading: true }
    case ADD_PURCHASE + '_FULFILLED':
      return { ...state, purchases: action.payload, loading: false }
    case REMOVE_PURCHASE + '_PENDING':
      return { ...state, loading: true };
    case REMOVE_PURCHASE + '_FULFILLED':
      return { ...state, loading: false, purchases: action.payload }
    default:
      return state;
  }
}
```
</details>

<details>
<summary> <code>Budget.js </code> </summary>

```

import React, { Component } from 'react';
import Background from './../shared/Background/Background'
import Chart1 from './../shared/Chart1';
import Chart2 from './../shared/Chart2';
import AddPurchase from './../shared/AddPurchase';
import DisplayPurchases from './../shared/DisplayPurchases';
import Loading from './../shared/Loading/Loading';
import Nav from './../shared/Nav';
import './Budget.css';
import { connect } from 'react-redux'
import { requestUserData } from './../../ducks/userReducer'
//IMPORT THE addPurchase AND removePurchase ACTION CREATORS
import { requestBudgetData, addPurchase, removePurchase } from './../../ducks/budgetReducer'


class Budget extends Component {
  componentDidMount() {
    this.props.requestUserData();
    this.props.requestBudgetData();
  }

  render() {
    const { loading, purchases, budgetLimit } = this.props.budget;
    const { firstName, lastName } = this.props.user;
    return (
      <Background>
        {loading ? <Loading /> : null}
        <div className='budget-container'>
          <Nav firstName={firstName} lastName={lastName} />
          <div className='content-container'>
            <div className="purchases-container">
	    // USE PROPS TO PASS DOWN addPurchase AND removePurchase FUNCTIONS
              <AddPurchase addPurchase={this.props.addPurchase} />
              <DisplayPurchases purchases={purchases} removePurchase={this.props.removePurchase} />
            </div>
            <div className='chart-container'>
              <Chart1 purchases={purchases} budgetLimit={budgetLimit} />
              <Chart2 purchases={purchases} />
            </div>
          </div>
        </div>
      </Background>
    )
  }
}

function mapStateToProps(state) {
  return {
    budget: state.budget,
    user: state.user
  }
}

	
// ADD addPurchase AND removePurchase TO THE 2ND OBJ ARG IN THE CONNECT METHOD
export default connect(mapStateToProps, { requestUserData, requestBudgetData, addPurchase, removePurchase })(Budget);

```
</details>


## Resources

<details>

<summary> <code> React with Redux </code> </summary>

* [React Redux Docs](https://react-redux.js.org/introduction/quick-start)
* [Redux - Usage With React](https://redux.js.org/basics/usage-with-react)

</details>

<details>

<summary> <code> Redux Middleware </code> </summary>

* [Understanding Redux Middlewares](https://redux.js.org/advanced/middleware)
* [Apply Middleware](https://redux.js.org/api/applymiddleware)
* [Redux Promise Middleware](https://github.com/pburtchaell/redux-promise-middleware/blob/master/docs/introduction.md)

</details>

<details>

<summary> <code> Combine Reducers </code> </summary>

* [Combine Reducers](https://redux.js.org/api/combinereducers)

</details>

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2019. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>
