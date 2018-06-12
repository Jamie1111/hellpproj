import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App; // only for one thing
// export ... is for multiple things


// a prop is any input you pass to a react component

<LogOutButton text="wanna log out?" />

// here, text is the prop, and "wanna log out" is the value

// you can extend a React Component, a functional component or a simple JSX element
// all the props are stored in the this.props object in the component object

class LogOutButton extends Component {
  render() {
    return <div>{this.props.text}</div>
  }
}
// this is how you pass down data from a parent component to a child component
// props are immutable - "read-only" (cannot be changed)
// the state represents mutable data
// put the state object directly inside the class
// state has to be in the parent component so it can be passed down to the children components
class User extends Component {
  state = {
    username: 'Jamie'
  }

  render() {
    <p>Username: {this.state.username}</p>
  }
}

// use setState() function to change the data in state; will notify all child components and current component about state update
// two ways of using - passing a callback: (allows us to make changes to the state and also having the reference to the previous state)

this.setState(prevState => ({
  username: prevState.username + 'Wee'
}))

// OR pass an object into setState() - (merges current object with previous object i think)

this.setState({
  username: "Jamie Wee"
})

//every time local state changes, React will trigger a re-render of the component by calling the render() method

// if you extend from a react component, you can use componentDidMount()
// which means it will run as soon as the component is loaded

componentDidMount(){
  // make API calls here
  // as soon as the component loads, data will be fetched
}

// the fetch() method is the JavaScript ES6 version of $.ajax()
// case one - simple url
// this will return a Promise object, thus there will be 'then's
fetch('https://jsfsblfdjslfhsjfs.com')
  .then(function(data){
    // modify the data as you please, to whatever you want to do with it
    // .then is to make sure it runs only when successful
    // "data", the callback's first argument to 'then', is the data object fetched from the API URL 
  })
  .catch(function(error){
    // if there is an error, it will be caught here
  })

 




// class A extends React.Component {
//   render(){
//     return(
//       <div/>
//     )
//   }
// }

// A is a react component class or a react component type
// A takes in parameters called props
// returns a hierarchy of views to display a render method
// the render method takes a description of what you want to render, and react
// renders that on to the screen
// render returns a react element



// which one is the thing that has to be stored in only one div
// different between the import statements etc. one is import react, reactcomponet eg one of them can only import one file and the other the whole thing?
// whats the json thing
// whats the form thing
// difference between extend "component" and "react.component"




import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement('div', { className: 'welcome-message' }, 'Hello World')
// first arg. is the element type, contained in a string ('p'. 'span', 'button)
// second arg. takes in an object of HTML attributes for the element etc. className; either this or null
// third arg. is the content - null, string, HTML element, JavaScript code or a react component

// this is where JSX comes in - JSX lets you write react components in a similar syntax as html
// in JSX, enclose any returning javascript code in curly brackets {} and use normal html tags <div>

let people = [
  { name: "ian" },
  { name: "steph" },
  { name: "ting feng" }
]

let element = <ol>
  {people.map(person => (<li>(person.name)</li>))}
</ol>;

ReactDOM.render(element, document.getElementById('root'))

// DEFINING/CREATING REACT COMPONENTS
// COMPONENT #1 (a class component)

// they are reusable pieces of code responsible for returning HTML to be rendered onto the page
// often written in JSX
// absolutely required in any react component class: render()

class ContactList extends React.Component {
  render() {
    let people = [
      { name: "ian" },
      { name: "steph" },
      { name: "ting feng" },
    ];

    return <ol>
      {people.map(person => (
        <li>(person.name)</li>
      ))}
    </ol>
  }
}
// this means we are defining a component thats a javascript class that inherits from react.component

ReactDOM.render(element, document.getElementById('root'));

// if you want to use this code: 
// class ContactList extends Component {
// ...
// }
// then you have to write the first line of code like this: "import React, {Component} from 'react'"

// COMPONENT #2

// this is a functional component. its typical structure is like this:

function ContactList(props) {
  return (
    <ol>
      {props.people.map((person) => (
        <li>{person.name}</li>
      ))}
    </ol>
  )
}


