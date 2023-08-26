import { Modal} from "./modal.js"
import {imc} from "./calculaterIMC.js"
import {Fail}from "./fail.js"

export function validation(){

  const weight=Modal.inputWeight.value
  const height=Modal.inputHeight.value
  
  if(weight==Number(weight)&& height==Number(height) && weight!="" && height!=""){

    const heightCM=height*0.01
    const imcM=imc(weight,height)
    const imcCM=imc(weight,heightCM)

    if(height>100){
      Modal.open(imcCM)
    }else{
      Modal.open(imcM)
    }
    
  }else{
    Fail.open()
  }
}

