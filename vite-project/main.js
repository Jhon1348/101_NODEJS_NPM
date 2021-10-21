import './style.css'
import user from './user.js';

document.querySelector('#app').innerHTML = `
  <h1>Hello Mon1!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
user('pepe@').consoleme()
console.log('prova 2');