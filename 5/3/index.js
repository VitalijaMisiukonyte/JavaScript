import React from 'react';
import { render } from 'react-dom';
import {Header} from './Hello';
import { ToDoList } from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  state = { data: [{ name: 'Parašyti', done: false }, { name: 'Išsianalizuoti', done: false }, { name: 'Padaryti', done: false }] } //tik tada kai mes norim kažką keist. nėra būtinas šitoj užduotį
  done = (index) => {
    const dataCopy = this.state.data.slice();
    dataCopy[index].done = true;
    this.setState({
      data: dataCopy
    });      
  } 

  deleteItem = (index) => {
    const dataCopy = this.state.data.slice();
    dataCopy.splice(index, 1)
    this.setState({
      data: dataCopy
    }); 
  } 
 
  render = () => {
    return (
      <div style={styles}>
        <Header
          text='Text' />
        <ToDoList 
          data={this.state.data}
          done={this.done} 
          deleteItem={this.deleteItem}
        />
      </div>
    )
  }
};