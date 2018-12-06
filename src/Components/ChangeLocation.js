import React, { Component } from 'react';

class ChangeLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.props.updateLocation(this.state.zipcode);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div className="change-location">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Change location: </label>
            <input
              type="text"
              name="zipcode"
              placeholder="zipcode"
              onChange={(e) => this.handleChange(e)}
              className="input-box">
            </input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}


export default ChangeLocation;
