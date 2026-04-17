var num1;
var num2;
var total;




function converter(){
    num1 = parseInt(num1);
    num2 = parseInt(num2);

}



function entranda(){
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
    total = document.getElementById("resultado");
    converter()


}

function somar(){
    entranda()

    total.innerHTML = num1 + num2;
}

function subtrair(){
      
entranda()
    total.innerHTML = num1 - num2;

}

function dividir(){
    entranda()

    total.innerHTML = num1 / num2;

}

function multiplicar(){
     entranda()

    total.innerHTML = num1 * num2;
}
