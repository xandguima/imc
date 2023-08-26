import {validation} from "./validationNumber.js"
import {Fail} from "./fail.js"
// variaveis
const form=document.querySelector('form')
const inputWeight=document.querySelector('#weight')
const inputHeight=document.querySelector('#height')

form.onsubmit = function(event){
  event.preventDefault()
  
  validation()


}
inputWeight.oninput = ()=> Fail.close()
inputHeight.oninput = () =>Fail.close()


