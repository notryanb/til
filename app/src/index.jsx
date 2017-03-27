import React from 'react';  
import { render } from 'react-dom';
import Routes from './router';

function main() {  
  const app = document.createElement('div');    
  document.body.appendChild(app);    
  render(Routes, app); 
}
main();  

