import React from 'react';

export class Counter extends React.Component {
  componentWillMount() {
    console.log('componentWillMount');
    console.log(this.props.skaicius);
  }
  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.props.skaicius);
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
    console.log(this.props.skaicius);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log(this.props.skaicius);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
    console.log(this.props.skaicius);
  }
  componentDidUpdate(nextProps, nextState) {
    console.log('ComponentDidUpdate');
    console.log(this.props.skaicius);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    console.log(this.props.skaicius);
  }

  render = () => {
    return ( 
      <h1>{this.props.skaicius}</h1>
    )
  }
};