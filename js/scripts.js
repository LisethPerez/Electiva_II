function onlyNums(e) {
    const code = window.event ? e.which : e.ketCode;
    return !(code < 48 || code > 57);
}

function begin() {
    const vOne = parseInt(document.getElementById('valueOne').value);
    const vTwo = parseInt(document.getElementById('valueTwo').value);
    var combo = document.getElementById('opt');
    var chain = document.getElementById('chain').value;
    var selected = combo.options[combo.selectedIndex].text;
  
    var total=0, div1=0, div2=0; sum1=0, sum2=0;
    //alert(selected)
    if (selected=='Sumar') {
        total = vOne+vTwo
        alert("La suma es: " + total)

    } else if(selected=='Restar'){
        total = vOne-vTwo;
        alert("La resta es: " + total)

    } else if(selected=='Multiplicar'){
        total = vTwo*vOne
        alert("La multiplicación es: " + total)

    } else if(selected=='Dividir'){
        total = vTwo/vOne
        alert("La división es: " + total)

    } else if(selected=='Potencia'){
        total = Math.pow(vTwo,vOne)
        alert("La potencia es: " + total)

    } else if(selected=='Maximo Comun Divisor'){
        alert("MAXIMO")//PENDIENTE

    } else if(selected=='Números Amigos'){
        div1=friends(vOne);
        div2=friends(vTwo);
        sum1=sum(div1);
        sum2=sum(div2);
        
        if(sum1==vTwo && sum2==vOne){
            alert("los números " + vOne + " - " + vTwo + " son amigos")
        } else{
            alert("los números " + vOne + " - " + vTwo + " no son amigos")
        }
        
    } else if(selected=='Números Primos'){
        alert("primos")
        
    } else if(selected=='Días entre Fechas'){
        alert("días")

    } else if(selected=='Edad (Fecha Final)'){
        alert("edad")

    } else if(selected=='Nombre Propio'){
        alert("nombre")

    } else if(selected=='Palíndromo'){
        if(palindromo){
            alert("Es palíndromo");
        } else{
            alert("No es palíndromo");
        }       
    }
}

$(document).ready(function () {
    $('#btnHide').click( () =>{
       $('#layout').fadeOut('slow');
    });

    $('#btnView').click( () =>{
       $('#layout').fadeIn('slow');
    });
})

function friends(number) {
	var a=1;
	var b=0;
	var numbers = new Array();
	while(a<number) {
		var h = number % a;
		if(h == 0) {
			numbers[b]=a;
			b++;
		}
		a++;
	}
	return numbers;
}

function sum(numbers) {
	var vector=numbers.length;
	var a=0;
	var sum=0;
	while(a<vector) {
		sum=sum+numbers[a];
		a++;
	}
	return sum;
}

function palindromo(chain){
    chain=chain.toLowerCase().replace(/ /g, "").replace(/,/g, "").replace(".", "");
    
    for (var i=0;i<chain.length;i++){
		if(chain[i]!=chain[chain.length-i-1]){
			return false;
		}
	}
	return true;
    //document.write("Tu frase "+resultado);
  }

   //const dates = [

        //{
        //    code: "32423",
        //    name: "Juan Roa"
       // },
       // {
        //    code: "98734",
         //   name: "Maria Rojas"
        //},
        //{
          //  code: "8927423",
          //  name: "Lola Hernandez"
       // }
//]

   // dates.forEach((record)=>{
     //   alert(`Codigo=${record.code} Name=${record.name}`)
   // })