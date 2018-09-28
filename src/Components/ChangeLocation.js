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
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
        type="text"
        name="zipcode"
        placeholder="zipcode"
        onChange={(e) => this.handleChange(e)}>
        </input>
        <button type="submit">Enter</button>
      </form>
    )
  }
}


export default ChangeLocation;
