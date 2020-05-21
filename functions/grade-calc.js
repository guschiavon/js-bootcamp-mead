const gradeCalc = function(score, maxScore = 20){
   const gradeRange = (score / maxScore) * 100
   let gradeLetter = ''

   if (gradeRange >= 90) {
     gradeLetter = 'A'
   } else if (gradeRange <= 89 && gradeRange > 80)  {
     gradeLetter = 'B'
   } else if (gradeRange <= 79 && gradeRange > 70)  {
     gradeLetter = 'C'
   } else if (gradeRange <= 69 && gradeRange > 60)  {
     gradeLetter = 'D'
   } else {
     gradeLetter = 'F'
   }
   return `You got a ${gradeLetter} / (${gradeRange}%)!`
}


const grade = gradeCalc(17)

console.log(grade)
