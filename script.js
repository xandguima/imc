// variaveis
const form=document.querySelector('form')
const inputWeight= document.querySelector('#weight')
const inputHeight=document.querySelector('#height')

const alertError=document.querySelector('.alert-error')
const modalWrapper=document.querySelector('.modal-wrapper')
const modalwrapperH2=document.querySelector('.modal-wrapper h2')
const modalBtnClose=document.querySelector('.modal-wrapper button.close')


/*Funcions */
function fail(){
  alertError.classList.add("open")
}

function modal(a){
  modalWrapper.classList.add("open")
  alertError.classList.remove("open")
  modalwrapperH2.innerText=`Seu IMC é de ${a}`
}

function clickModal(){
  modalWrapper.classList.remove("open")
  alertError.classList.remove("open")
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
      modal(imcCM)
    }else{
      modal(imcM)
    }
    
  }else{
    fail()
  }


}

modalBtnClose.onclick= function(){
  clickModal()
  inputHeight.value=""
  inputWeight.value=""
}
