import React from 'react';
import { render } from 'react-dom';
import {Header} from './Hello';
import { ToDoList } from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  state = { text: 'Text' } //tik tada kai mes norim kažką keist. nėra būtinas šitoj užduotį
  dataArray = ['1', '2']
  render = () => {
    return (
      <div style={styles}>
        <Header
          text='Text' />
        <ToDoList 
          data={this.dataArray} 
        />
      </div>
    )
  }
};

render(<App />, document.getElementById("root"));