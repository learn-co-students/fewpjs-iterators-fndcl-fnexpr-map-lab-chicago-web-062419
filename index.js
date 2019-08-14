const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  //toTitleCase('Weebo greebo.')
  // console.log(tutorials)
   //tutorials = tutorials.map(toTitleCase)
 let temp = tutorials.map(toTitleCase)
  //tutorials = temp
  //return tutorials
  return temp
}

// function toTitleCase(str){
//   console.log(str)
// }

function toTitleCase(str){
  str = str.split(' ')
  let temp = []
  str.forEach(word =>{
      let tempLetter = word[0].toUpperCase();
      word = word.replace(word[0] , tempLetter)
      console.log(word + ": New Word")
      temp.push(word)
   })

   let sentence = ''
   for(let i = 0; i < temp.length; i++){
    sentence += `${temp[i]} `
   }
   sentence = sentence.substring(0 , sentence.length -1)
   //console.log(sentence)
   return sentence

}