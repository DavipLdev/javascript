function somar(n1, n2) {
            
    return n1 + n2;
}

var soma = somar(20, 12)
console.log('resultado: ', soma)

somar.teste = 'propiedade da funcao'
console.log(somar.teste)

var teste = function (f) {
   f()
}

teste(function () {
    console.log('funcao passada por parametro')
})

console.log('-----------------')

var x = 0;//escopo global
var y;//escopo global

  function mostrarX() {
    var x = 10//escopo global
    var y = 20

     console.log('motstarx dentro: ' ,x)
     console.log('motstary dentro: ' ,y)
  }
  
  mostrarX()
//    console.log('motstarx fora: ' ,x)
//    console.log('motstary fora: ' ,y)



function invalid(n1,n2, n3, n4) {
    var valid = (n1 + n2 + n3 + n4)
    var msg = false

    console.log(msg)
    console.log( 'a soma e: ', valid)

                          
}
invalid(20, 20, 20, 20)

function somar() {

var result = 0
var x = 0

while (arguments[x]) {
 result += arguments[x]
  x++
}

 console.log('resultado e: ', result)
}
somar(100, 200, 300, 400)


