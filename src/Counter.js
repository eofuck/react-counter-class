// React allows us to write JSX, Componenet allows us to create class
import React, { Component } from 'react';

// all of the code inside this class becomes react component
export default class Counter extends Component {
  //allows us to use state
  //always takes props
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount,
    };
  }

  render() {
    //this gets consoled everytime this component rerenders
    console.log('render counter');
    return (
      <div>
        <button onClick={() => this.changeCount(-1)}>-</button>
        {/*acesses prop InitialCount passed down from App.js*/}
        <span>{this.state.count}</span>
        <button onClick={() => this.changeCount(+1)}>+</button>
      </div>
    );
  }

  //it Acesses previous state
  changeCount(amount) {
    //this.setState({ count: this.state.count + amount });
    //this setState is asynchronous
    this.setState((prevState) => {
      return { count: prevState.count + amount };
    });
  }

}
