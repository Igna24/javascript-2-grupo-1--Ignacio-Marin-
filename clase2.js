// 1. Escriba una function que escriba un número a la inversa
function numberReverse(number){
  return number.toString().split('').reverse('').join('');
}
console.log(numberReverse(12345))

// 2. Escriba una function que acepte un string como parámetro y 
// convierta cada primer letra de cada palabra en mayúscula
function leterUpper(word){
  let result = ""
  for(let i=0; i < word.length; i++){
    if(i === 0) {
      result += word[i].toUpperCase()
    } else {
      result += word[i].toLowerCase()
    }
  }
  return result
}
console.log(leterUpper('ignacio marin'))



function leterUpper2(word2){
  const validation = word2.split('')
  console.log(validation)
  for(i=0; i < validation.length; i++){
     const pModified = validation[0].toUpperCase()
     return pModified
  }
}
console.log(leterUpper2('ignacio marin'))