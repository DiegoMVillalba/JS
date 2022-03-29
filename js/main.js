    
    let nombre = prompt('Ingresa tu nombre');
    let dni = prompt(`Hola ${nombre}, ingresa tu dni`);
    let prestamo= prompt('Los prestamos tienen un interes del 20%, estas deacuerdo "SI" "NO" ');
    let dinero1 = 10000;
    let dinero2 = 50000;
    let dinero3 = 100000;
while(nombre != ""){

    if(prestamo == "SI"){
        let monto = parseInt(prompt(`${nombre} de cuando quieres el prestamo: 
                                                                         1.${dinero1}
                                                                         2.${dinero2}
                                                                         3.${dinero3} `));
        if((monto == dinero1) || (monto == 1)) {
            let interesMensual = parseInt(alert("Su interes es de $2000"));
            const porcentaje = (dinero1) =>{return dinero1*0.20}
            let dineroTotal =( dinero1*0.20+(dinero1));
            alert(`Usted debe ${dineroTotal}`);
            document.write(dineroTotal);
            break;

        }else if((monto == dinero2) || (monto == 2)){
            interesMensual =parseInt(alert("Su interes es de $10000"));
            const porcentaje = (dinero2) =>{return dinero2*0.20}
            let dineroTotal =( dinero2*0.20+(dinero2));
            alert(`Usted debe ${dineroTotal}`);
            document.write(dineroTotal);
            break;
            
        }else if((monto == dinero3) || (monto == 3)){
            interesMensual =parseInt(alert("su interes es de $20000"));
            const porcentaje = (dinero3) =>{return dinero3*0.20}
            let dineroTotal =( dinero3*0.20+(dinero3));
            alert(`Usted debe ${dineroTotal}`);       
            document.write(dineroTotal);
            break;
    }
    

}



    }