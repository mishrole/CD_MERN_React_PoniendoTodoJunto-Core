import React, { Component } from 'react';

class PersonCard extends Component {
  constructor(props) {
    super(props);

    const { age } = this.props;
    this.state = {
      age: age
    }
  }

  happyBirthday = () => {
    this.setState({ age: this.state.age + 1 });
  }

  render() {
    const { firstName, lastName, hairColor } = this.props;
    return (
      <div className="card">
        <h1 className="mt-0">{lastName}, {firstName}</h1>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {hairColor}</p>
        <button className="btn" onClick={ this.happyBirthday }>Birthday Button for {firstName} {lastName}</button>
      </div>
    )
  }
}

export default PersonCard;