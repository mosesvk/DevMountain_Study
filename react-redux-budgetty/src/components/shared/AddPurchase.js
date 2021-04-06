import React, { Component } from 'react';

class AddPurchase extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: 'other',
      description: '',
      price: ''
    }
  }

  backup() {
    alert('Missing prop "addPurchase" in Chart2 component')
  }

  add() {
    let { price, category, description } = this.state;
    let { addPurchase } = this.props;
    if (!addPurchase) addPurchase = () => alert("Missing prop: addPurchase (AddPurchase.js)")
    let num = parseInt(price);
    if (num < 0) return alert('Cannot have price less than zero.')
    if (!Number.isNaN(num) && typeof num === 'number') {
      if (num && category && description) {
        if (!addPurchase) return this.backup();
        addPurchase(num, description, category);
        this.setState({
          category: 'other',
          description: '',
          price: ''
        })
      } else alert('missing some info')
    } else alert('Fix the input for price.')
  }

  render() {
    const { price, category, description } = this.state;
    return (
      <div className='add-purchase'>
        <div className="form-group">
          <label>Description</label>
          <input
            value={description}
            onChange={(e) => this.setState({ description: e.target.value })}
            type="text"
            className="form-control"
            placeholder="Description of purchase" />
          <label className='mt-3'>Category</label>
          <select
            value={category}
            className="custom-select"
            onChange={(e) => this.setState({ category: e.target.value })}>
            <option defaultValue value="other">Other</option>
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="gas">Gas</option>
          </select>
          <section>
            <div className="input-group mb-3 mt-4">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input
                min={1}
                value={price}
                type="number"
                className="form-control col-2"
                onChange={(e) => this.setState({ price: e.target.value })} />
              <div className="input-group-append">
                <span className="input-group-text">.00</span>
              </div>
            </div>
            <button
              className='btn btn-success btn-lg'
              onClick={() => this.add()}>Add</button>
          </section>
        </div>
      </div>
    )
  }
}

export default AddPurchase