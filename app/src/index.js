console.log('Yo TIL!!!');
const component = require('./components/boilerplates');  
const app = document.createElement('div');

document.body.appendChild(app);

app.appendChild(component()); 
