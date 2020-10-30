import React, { Component } from 'react';


class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          Age: this.props.age,
        };
      }
    
      changeAge = () => {
        this.setState({Age: this.state.Age + 1})
      }
    
      render() {
        const { firstName, lastName, hairColor } = this.props;
        return (
          <div className="card section">
            <div className="card-body">
              <h1>
                {firstName} {lastName}
              </h1>
              <p>Age: {this.state.Age}</p>
              <p>Hair Color: {hairColor}</p>
    
              <button onClick = { this.changeAge }>
                Birthday Button for {this.props.firstName} {this.props.lastName}
              </button>
            </div>
          </div>
        );
      }
    }
export default PersonCard;