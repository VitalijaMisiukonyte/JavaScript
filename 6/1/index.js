import React from 'react';
import { render} from 'react-dom';
import { Counter } from './Hello';


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  state = {
    skaicius: 0,
    isnykti: 5
  }
  plus = () => {
    const skaiciusCopy = this.state.skaicius;
    this.setState({
      skaicius: skaiciusCopy + 1
    });
  }
  minus = () => {
    const skaiciusCopy = this.state.skaicius;
    this.setState({
      skaicius: skaiciusCopy - 1
    });
  }

  render = () => {
    return (
      <div> 
      { this.state.skaicius != "5" ?
        <div style = {styles}>
        <Counter skaicius = {this.state.skaicius} /> 
        <button onClick = {this.plus.bind(this)} id='prideti'>
        +
        </button> 
        <button onClick = {this.minus.bind(this)} id = 'atimti'>
        -
        </button> 
        </div > 
        : null
        } 
        </div>
    )
  }
};

render( < App / > , document.getElementById('root'));
