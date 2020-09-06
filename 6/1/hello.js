import React from 'react';

export class Counter extends React.Component {
  render = () => {
    return ( 
    	<h1> {this.props.skaicius}</h1>
    )
  }
};