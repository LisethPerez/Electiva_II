/*function onlyNums(e) {
    const code = window.event ? e.which : e.ketCode;
    return !(code < 48 || code > 57);
}*/

//setTimeout("document.location=document,location", 5000);
function begin() {
    const vOne = parseInt(document.getElementById('valueOne').value);
    const vTwo = parseInt(document.getElementById('valueTwo').value);
    const date1 = new Date(document.getElementById('dateOne').value);
    const date2 = new Date(document.getElementById('dateTwo').value);
    
    
    var combo = document.getElementById('opt');
    var chain = document.getElementById('chain').value;
    var selected = combo.options[combo.selectedIndex].text;
  
    var total=0, div1=0, div2=0; sum1=0, sum2=0;
    //alert(selected)
    if (selected=='Sumar') {
        total = vOne+vTwo
        document.getElementById('layout').innerHTML = "La suma es: " + total;
        alert("La suma es: " + total)

    } else if(selected=='Restar'){
        total = vOne-vTwo;
        document.getElementById('layout').innerHTML = "La resta es: " + total;
        alert("La resta es: " + total)

    } else if(selected=='Multiplicar'){
        total = vTwo*vOne
        document.getElementById('layout').innerHTML = "La multiplicación es: " + total;
        alert("La multiplicación es: " + total)

    } else if(selected=='Dividir'){
        total = vTwo/vOne
        document.getElementById('layout').innerHTML = "La división es: " + total;
        alert("La división es: " + total)

    } else if(selected=='Potencia'){
        total = Math.pow(vTwo,vOne)
        document.getElementById('layout').innerHTML = "La potencia es: " + total;
        alert("La potencia es: " + total)

    } else if(selected=='Maximo Comun Divisor'){
        alert("MAXIMO")//PENDIENTE

    } else if(selected=='Números Amigos'){
        div1=friends(vOne);
        div2=friends(vTwo);
        sum1=sum(div1);
        sum2=sum(div2);
        
        if(sum1==vTwo && sum2==vOne){
            document.getElementById('layout').innerHTML = "los números " + vOne + " - " + vTwo + " son amigos";
            alert("los números " + vOne + " - " + vTwo + " son amigos")
        } else{
            document.getElementById('layout').innerHTML = "los números " + vOne + " - " + vTwo + " no son amigos";
            alert("los números " + vOne + " - " + vTwo + " no son amigos")
        }
        
    } else if(selected=='Números Primos'){
        primes(vOne,vTwo);

    } else if(selected=='Días entre Fechas'){
        dates(date1,date2);

    } else if(selected=='Edad (Fecha Final)'){
        age(date1)

    } else if(selected=='Nombre Propio'){
        //document.getElementById('layout').innerHTML = "La potencia es: " + total;
        namePro(chain);

    } else if(selected=='Palíndromo'){
        if(palindromo){
            document.getElementById('layout').innerHTML = "Es palíndromo";
            alert("Es palíndromo");
        } else{
            document.getElementById('layout').innerHTML = "No es palíndromo"
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
    $('#submit').click( () =>{
       // $('#layout').fadeOut('slow');
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

  function primes(num1,num2) {
      var sum=0;
    for (num1; num1<= num2; num1++) {
        var conta=0;
       for(var j=1;j<=num1;j++){
           if(num1%j==0){
               conta++;

           }
       }
       if(conta==2){
        document.getElementById('layout').innerHTML = "Los números primos son: " + num1;
          //alert(num1)
          sum = num1+sum;
        //document.write(num1 + "<br>")          
       }
       
    }
    document.getElementById('layout').innerHTML = "La suma de éstos es: " + sum;
    //alert(sum)
}

function namePro(chain) {
  
    document.getElementById('layout').innerHTML = chain.toLowerCase().trim().split(' ').map( v => v[0].toUpperCase() + v.substr(1)).join(' ');  
  }

function dates(date1,date2){
   
    var daysdif= date2.getTime()-date1.getTime();
	var contdias = Math.round(daysdif/(1000*60*60*24));
    
    //alert(contdias);
    document.getElementById('layout').innerHTML = "Los días de difenrencia son: " + contdias;
}

function age(date1){
    var today = new Date();
    var age = today.getFullYear() - date1.getFullYear();
    var month = today.getMonth() - date1.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < date.getDate())) {
        age--;
    }
    document.getElementById('layout').innerHTML = "Su edad es de: " + age + " años";
    //alert(age)
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