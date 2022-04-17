///Servicio de alquiler de vehículos para viajes

let cantidadPersonas = 17;

do{
    cantidadPersonas = parseInt(prompt("¡Bienvenido/da! Te ayudamos a elegir un auto para tu viaje ¿Cuántas personas viajan? Ingrese un número:"));

    if (cantidadPersonas >= 1 && cantidadPersonas <= 2){
        alert("Te recomendamos nuestra Peugeot Partner.")
    }else if (cantidadPersonas >= 3 && cantidadPersonas <=6){
        alert("Te recomendamos nuestra Peugeot Expert.")
    }else if (cantidadPersonas >=7 && cantidadPersonas <=17){
        alert("Te recomendamos nuestra Peugeot Boxer.")
    }else if (cantidadPersonas === 0){
        alert("Ingrese un número válido")
    }else if (cantidadPersonas >17){
        alert("Lo sentimos no tenemos un vehículo adecuado para tus necesidades.")
    }    
}while(cantidadPersonas > 17);