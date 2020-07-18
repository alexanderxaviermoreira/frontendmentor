function openShow(){
    let show = document.querySelector('.principal__conteudo--pessoal__hover').style.filter;
    if(show=='opacity(0)'){
        document.querySelector('.principal__conteudo--pessoal__hover').style.filter='opacity(100%)'; 
    }else{
        document.querySelector('.principal__conteudo--pessoal__hover').style.filter='opacity(0)';
    }
}
openShow();