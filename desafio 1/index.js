
// (agregar eventos)
/* LOS MAS VENDIDOS, AHORA TIENEN UN 20% DE DESCUENTO */
function comprar(){
    alert ("A continuacion sera redirigido al resumen para pagar.");
}
let boton = document.getElementById("btnComprar")
boton.addEventListener("click", comprar)

alert ("Bienvenido/a a continuacion podras seleccionar tu mueble en descuento");
alert ("haz tu pedido escribiendo el numero correspondiente a cada mueble.");

let choose = parseInt(prompt("(1): Ropero 4 puertas: 500 CLP, (2): Ropero 6 puertas: 800 CLP, (3): Mesita de noche: 200 CLP"));

const plus = (a, b) => a + b;
const discount = x => x * 0.2;
const minus = (a, b) => a - b;

// productos 
let prod1 = 500;
let prod2 = 800;
let prod3 = 200;

let envio = 50;

//Carrito

const productos = [
    {id: 1, mueble: "Ropero 4 puerta", precio: 500 },
    {id: 2, mueble: "Ropero 6 puertas", precio: 800},
    {id: 3, mueble: "Mesita de noche", precio: 200}
    
];

let carrito = [];

//calculo parcial
let finalProd1 = minus(prod1, discount(prod1));
let finalProd2 = minus(prod2, discount(prod2));
let finalProd3 = minus(prod3, discount(prod3));

//calculos finales con envio
let totalProd1 = plus(finalProd1, envio); 
let totalProd2 = plus(finalProd2, envio);
let totalProd3 = plus(finalProd3, envio);


switch (choose){
      case 1:
        alert(`tu descuento del 20% se esta procesando...`);
        alert(`El precio final de tu Mueble con el 20% de descuentos es: ${finalProd1} pesos chilenos.`);
        let again1 = prompt("¿Deseas envio a domicilio? El costo del envio es de 50 CLP.").toLowerCase();
        if (again1 == "si"){
            carrito.push(productos[0]);
            carrito[0].precio = totalProd1
            alert(`El precio del producto + el envio es de: ${totalProd1} pesos chilenos.`);
            alert("tu producto se agrego al carrito de compras");
            console.log(carrito);
        } 
        else if (again1 == "no"){
            carrito.push(productos[0]); 
            carrito[0].precio = finalProd1   
            alert(`Precio final de tu Mueble: ${finalProd1} pesos chilenos.`);
            alert("tu producto se agrego al carrito de compras");
            console.log(carrito);
        }
        else {
            alert(`Error al no seleccionar "si" o "no", por favor, realizar el pedido nuevamente.`);
        }
        break;
      
        case 2:
        alert(`tu descuento del 20% se esta procesando...`);
        alert(`El precio final de tu Mueble con el 20% de descuentos es: ${finalProd2} pesos chilenos.`);
        let again2 = prompt("¿Deseas envio a domicilio? El costo del envio es de 50 CLP.").toLowerCase();
        if (again2 == "si"){
            carrito.push(productos[1]);
            carrito[0].precio = totalProd2
            alert(`El precio del producto + el envio es de: ${totalProd2} pesos chilenos.`);
            alert("tu producto se agrego al carrito de compras");
            console.log(carrito);   
        }
        else if (again2 == "no"){
            carrito.push(productos[1]);
            carrito[0].precio = finalProd2 
            alert(`Precio final de tu Mueble: ${finalProd2} pesos chilenos.`);
            alert("tu producto se agrego al carrito de compras");
            console.log(carrito);
        }
        else {
            alert(`Error al no seleccionar "si" o "no", por favor, realizar el pedido nuevamente.`);
        }
        break;
      
        case 3:
        alert(`tu descuento del 20% se esta procesando...`);
        alert(`El precio final de tu Mueble con el 20% de descuentos es: ${finalProd3} pesos chilenos.`);
        let again3 = prompt("¿Deseas envio a domicilio? El costo del envio es de 50 CLP.").toLowerCase();
        if (again3 == "si"){
            carrito.push(productos[2]);
            carrito[0].precio = totalProd3
            alert(`El precio del producto + el envio es de: ${totalProd3} pesos chilenos.`);
            alert("tu producto se agrego al carrito de compras");
            console.log(carrito);
        }
        else if (again3 == "no"){
            carrito.push(productos[2]);
            carrito[0].precio = finalProd3
            alert(`Precio final de tu Mueble: ${finalProd3} pesos chilenos.`);
            alert("tu producto se agrego al carrito de compras");
            console.log(carrito);
        }
        else {
            alert(`Error al no seleccionar "si" o "no", por favor, realizar el pedido nuevamente.`);
        }
    break; 
}
