const ladoCuadrado= 5;
const perimetroCuadrado= ladoCuadrado*4;
const parrafo=document.querySelector('.');
function area(lado){
    return lado**2;
}
const area1=area(10);

function circulo(radio){
    return{
    area:  (Math.PI)*(radio**2),
    diametro: 2*(Math.PI)*(radio)
    }
}

function altura(lado1,lado2,lado3){
    const s=(lado1+lado2+lado3)/2;
    const altura1=(2/lado1*((s*(s-lado1)*(s-lado2)*(s-lado3))**(1/2)));
    return ("El area determinada es"+ (s*(s-lado1)*(s-lado2)*(s-lado3))**(1/2));
}