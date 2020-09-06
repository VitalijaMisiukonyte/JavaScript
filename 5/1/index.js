import React from 'react';
import { render } from 'react-dom';
import {Header} from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  state = { text: 'Text' } //tik tada kai mes norim kažką keist. nėra būtinas šitoj užduotį

  render = () => {
    return (
      <div style={styles}>
        <Header
          text='Text' />
      </div>
    )
  }
};

render(<App />, document.getElementById("root"));