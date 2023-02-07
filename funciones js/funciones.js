 /*function pedirNombre(){
    return prompt("digite su nombre")
}
//ejecutar tarea
var nombre = pedirNombre();
//procedimiento
function mostrarNombre( nom ){
    document.write("su nombre es :" +nom)

}
mostrarNombre(nombre);
*/
/*function suma(n1,n2){
    return n1+n2 ;
}
var numero1 =parseInt(prompt("digite numero1"));
var numero2 =parseInt(prompt("digite numero2"));
var suma1 = suma(numero1,numero2);
var suma2 = suma(5,8);
var suma3 = suma(10,20);
document.write("la suama es :"+suma1 +"<br>");
document.write("la suama es :"+suma2 +"<br>");
document.write("la suama es :"+suma3 +"<br>");*/
/*function multiOperacion(n1,n2,signo){
    if(signo=="+"){
        return n1+n2;

    }else if(signo=="-"){
        return n1-n2;
    }else if(signo=="*"){
        return n1*n2;
    }else{
        return n1/n2;
    }
}
document.write("el resultado es:"+multiOperacion(4,5,"*")+"<br>");
document.write("el resultado es:"+multiOperacion(4,5,"-")+"<br>");
document.write("el resultado es:"+multiOperacion(4,5,"+")+"<br>");
document.write("el resultado es:"+multiOperacion(4,5,"/")+"<br>"); */
/*//punto
var altura = parseInt(prompt("digite la altura de la figura"));
var base = parseInt(prompt("digite la base de la figura"));
function superficieFigura(a,b){
    return a*b;
}
var superficie =superficieFigura(altura,base)
document.write("la superficiede "+altura+"y"+base+"es:"+superficie);*/
//punto2
var Kilometros = parseInt(prompt("digite kilometros por hora"));
function convertirMetros (k){
    return k*1000;

}
var Metros =convertirMetros(Kilometros);
document.write(Kilometros+"kilometros son"+metros+"metros");
