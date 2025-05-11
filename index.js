const botao = document.getElementById('mostrarmsg');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', function(){
    mensagem.style.display = 'block';
    mensagem.textContent = "Nós não podemos mudar o que está feito, podemos apenas seguir em frente."
})





