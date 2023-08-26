export const Fail={
  alertError:document.querySelector('.alert-error'),
  open:function(){
    Fail.alertError.classList.add("open")
  },
  close(){
    Fail.alertError.classList.remove("open")
  }

}
