const form = document.getElementById('form-valores');
const valEnt= document.getElementById('valor-entrada');
const valSai = document.getElementById('valor-saida');


var button = document.querySelector('submit');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const valEnt= document.getElementById('valor-entrada');
    const valSai = document.getElementById('valor-saida');
    const mensagemSucesso = 'Valores alterados com sucesso!'
    if(valEnt.value > valSai.value){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        valEnt.value = '';
        valSai.value = '';
    } else {
        valSai.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})