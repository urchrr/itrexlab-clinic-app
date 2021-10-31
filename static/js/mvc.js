import Controller from './controller.js'
import Model from './model.js'
import View from './view.js'

console.log('run')
const app = new Controller(new Model(), new View())
