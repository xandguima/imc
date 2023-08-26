export const Modal={
  inputHeight:document.querySelector('#height'),
  inputWeight:document.querySelector('#weight'),
  alert:document.querySelector('.alert-error'),
  wrapper:document.querySelector('.modal-wrapper'),
  messege:document.querySelector('.modal-wrapper h2'),
  buttonClose:document.querySelector('.modal-wrapper button.close'),


  open(a){
    Modal.messege.innerText=`Seu IMC é de ${a}`
    Modal.wrapper.classList.add("open")
  },
  close:function(){
    Modal.wrapper.classList.remove("open")
  }
}

Modal.buttonClose.onclick= function(){
  Modal.close()
  Modal.inputHeight.value=""
  Modal.inputWeight.value=""
}


window.addEventListener('keydown',handleKeyDown)
function handleKeyDown(event){
  if(event.key==='Escape'){
    Modal.close()
  }
}