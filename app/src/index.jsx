import React from 'react';  
import ReactDOM from 'react-dom';
import App from './components/App.jsx';  
import routes from './router';

function main() {  
  const app = document.createElement('div');    
  document.body.appendChild(app);    
  ReactDOM.render(<App />, app); 
}
main();  

