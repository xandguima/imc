// variaveis
const form=document.querySelector('form')
const inputWeight= document.querySelector('#weight')
const inputHeight=document.querySelector('#height')

const alertError=document.querySelector('.alert-error')

/*Funcions */
function fail(){
  alertError.classList.add("open")
}
const Modal={

  wrapper:document.querySelector('.modal-wrapper'),
  messege:document.querySelector('.modal-wrapper h2'),
  buttonClose:document.querySelector('.modal-wrapper button.close'),


  open(a){
    Modal.messege.innerText=`Seu IMC é de ${a}`
    Modal.wrapper.classList.add("open")
    alertError.classList.remove("open")
  },
  close:function(){
    Modal.wrapper.classList.remove("open")
    alertError.classList.remove("open")
  }
}

function imc(weight,height){
  const imc=weight/(height*height)
  const imcFix=imc.toFixed(1)
  return imcFix
}

form.onsubmit = function(event){
  event.preventDefault()
  
  const weight=inputWeight.value
  const height=inputHeight.value
  
  if(weight==Number(weight)&& height==Number(height)){
    const heightCM=height*0.01
    const imcM=imc(weight,height)
    const imcCM=imc(weight,heightCM)

    if(height>100){
      Modal.open(imcCM)
    }else{
      Modal.open(imcM)
    }
    
  }else{
    fail()
  }


}

Modal.buttonClose.onclick= function(){
  Modal.close()
  inputHeight.value=""
  inputWeight.value=""
}
