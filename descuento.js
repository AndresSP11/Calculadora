const boton=document.querySelector('.precio');
const input1=document.querySelector('.input1');
const input2=document.querySelector('.input2');
const aplicado=document.querySelector('.aplicado');
boton.addEventListener('click',aplicando);
function aplicando(){
    const valorneto= (input1.value-input1.value*input2.value/100);
    aplicado.innerText=' TU PRECIO A PAGAR DICHO ARTEFACTO ES:'+ valorneto;
}