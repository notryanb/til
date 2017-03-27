// Libs
import React from 'react';  

// CSS
import './App.scss';

export default class App extends React.Component {  
  constructor() {
    super()
    this.state = {
      blogs: []
    }
  }
 
  componentDidMount() {
    fetch('http://localhost:3030')
      .then(response => response.json())
      .then(data => {
        this.setState({ blogs: data.fulfillmentValue });
      });
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.blogs !== nextState.blogs) {
      return true;
    }
    return false;
  }

  
  render() {
    return (
      <div>
      App Root
      </div>
    );
  }
}
