import React from "react";

export class Header extends React.Component {
  render = () => {
    return <h1>{this.props.text}</h1>;
  };
}

export class ToDoList extends React.Component {
  render = () => {
    return( <div>
      { this.props.data.map((item, index) => {
        return ( 
         <div>
            <p>
              {item}
            </p>
            <button id='done'>
              Done
            </button>
            <button id='delete'>
              Delete
            </button>
          </div>     
      )})}
    </div>
    )
}}