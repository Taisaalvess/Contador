let contador = 0;

const valor = document.querySelector('#valor');
const boton = document.querySelectorAll('.boton')

boton.forEach(boton => {
  boton.addEventListener('click', function(e) {

    const estilos = e.currentTarget.classList;

    if(estilos.contains('diminuir')) {
      contador--;
    }
    else if(estilos.contains('aumentar')) {
      contador++;
    }
    else {
      contador = 0;
    }
      valor.textContent = contador;


      if(contador > 0) {
        valor.style.color = '#fff';
      }
      if(contador < 0) {
        valor.style.color = '#CB1010';
      }
      if(contador < -10){
          contador= -10;
        valor.textContent = -10;
      }
      if(contador >= 10){
          contador= 10;
          valor.textContent = 10;
      }
  })
})