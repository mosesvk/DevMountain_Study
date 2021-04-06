import React, { Component } from 'react';
import Background from '../shared/Background/Background'
import Chart1 from '../shared/Chart1';
import Chart2 from '../shared/Chart2';
import AddPurchase from '../shared/AddPurchase';
import DisplayPurchases from '../shared/DisplayPurchases';
import Loading from '../shared/Loading/Loading';
import Nav from '../shared/Nav';
import './Budget.css';
import { connect } from 'react-redux'
// IMPORT THE ACTION CREATOR FROM THE REDUCER FILE FOR USE BY THE CONNECT METHOD, WHICH THEN ADDS THE FUNCTION TO THE PROPS // OBJECT OF THIS COMPONENT
import { requestUserData } from './../../redux/userReducer'
import {requestBudgetData} from './../../redux/budgetReducer'

class Budget extends Component {

  componentDidMount() {
    // WHEN THE COMPONENT MOUNTS, THE ACTION CREATOR IS INVOKED, THE REDUCER FUNCTION FIRES, AND STATE IS UPDATED ACCORDINGLY   // IN THE REDUX STORE
      this.props.requestUserData()
      this.props.requestBudgetData()
    }

  render() {
  // DESTRUCTURE THE LOADING PROPERTY FROM THE BUDGET OBJECT THAT WAS MAPPED TO PROPS THROUGH MAPSTATETOPROPS/CONNECT
    const { loading, purchases, budgetLimit } = this.props.budget;
    const {firstName, lastName} = this.props.user;
    return (
      <Background>
        {/* // UPDATE THE TERNARY TO CHECK WHETHER OR NOT THE LOADING PROPERTY 
        // ON THE BUDGET OBJECT IS TRUE. IF SO, THEN THE LOADING COMPONENT
        // SHOULD BE DISPLAYED */}
        {loading ? <Loading /> : null}
        <div className='budget-container'>
          <Nav firstName={firstName} lastName={lastName}/>
          <div className='content-container'>
            <div className="purchases-container">
              <AddPurchase />
              <DisplayPurchases purchases={purchases}/>
            </div>
            <div className='chart-container'>
              <Chart1 purchases={purchases} budgetLimit={budgetLimit}/>
              <Chart2 purchases={purchases}/>
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
    budget: state.budget, 
    user: state.user
  }
}

	
// THE CONNECT METHOD TAKES IN THE MAPSTATETOPROPS FUNCTION AND CONNECTS THIS COMPONENT TO THE REDUX STORE
// IN ORDER TO ACCESS THE REQUESTUSERDATA ACTION CREATOR, YOU NEED TO CONNECT IT TO
// THE REDUCER FUNCTION THROUGH THE CONNECT METHOD. THE CONNECT METHOD ACCEPTS TWO ARGUMENTS, A MAPSTATETOPROPS OBJECT, AND A MAPDISPATCHTOPROPS OBJECT. OUR DISPATCHED ACTIONS GO INSIDE OF THE SECOND ARGUMENT OBJECT AS A KEY/VALUE PAIR.
// export default connect(mapStateToProps)(Budget);
export default connect(mapStateToProps, { requestUserData, requestBudgetData })(Budget);
