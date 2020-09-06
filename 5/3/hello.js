import React from "react";

export class Header extends React.Component {
  render = () => {
    return <h1>{this.props.text}</h1>;
  };
}
export class ToDoList extends React.Component {
// {} -rašom objektą, {{}} - nurodom, kad rašysim js tekstą. 
  render = () => {
    return( <div>
      { this.props.data.map((item, index) => {
        return ( 
         <div style={{color: item.done == true ? 'green' : 'black'}}>
            <p>
              {item.name}
            </p>
            <button onClick={this.props.done.bind(this, index)} id='done'>
              Done
            </button>
            <button onClick={this.props.deleteItem.bind(this, index)} id='delete'>
              Delete
            </button>
          </div>     
      )})}
    </div>
    )
}}