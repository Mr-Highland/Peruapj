const mess=document.querySelector('.js-mess')
const message=document.querySelector('.js-pop-up')
const closeBtn=document.querySelector('.js-close')
const container=document.querySelector('.js-container')

function showmessage(){
   message.classList.add('open')
}
function hidemessage(){
message.classList.remove('open')
}

mess.addEventListener('click',showmessage)
closeBtn.addEventListener('click', hidemessage)
message.addEventListener('click', hidemessage)
container.addEventListener('click', function(event){
    event.stopPropagation()
})
