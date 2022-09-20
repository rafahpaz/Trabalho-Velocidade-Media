let calcular = document.querySelector('#calcular')
calcular.addEventListener('click', Calculando)
let limpar = document.querySelector('#limpar')
limpar.addEventListener('click', Limpando)
let lista = document.getElementById('lista').value

function Calculando(){
    let a= Number.parseFloat(document.getElementById('deslocamento').value)
    let b = Number.parseFloat(document.getElementById('tempo').value)
    let Resposta = ( (a / b) + " km/h")
    document.getElementById('resposta').value = Resposta
    document.getElementById("lista").innerHTML += Resposta + "                                                                                                                                                                                                                         "
    localStorage.setItem('Resposta', Resposta)
}

function Limpando(){
    a= (" ")
    b = (" ")
    Resposta = (" ") 
  document.getElementById('deslocamento').value = a
  document.getElementById('tempo').value = b
  document.getElementById('resposta').value = Resposta
}



