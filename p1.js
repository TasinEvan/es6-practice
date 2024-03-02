/*const multiplier = (num1 , num2 ,num3) => {
    const result = num1 * num2 * num3 
    return result 
}
// console.log(multiplier(5,5,5))

const sentences = {
first: 'i love developing' ,
second: 'i love biriani',
third : 'its Evan'
}
const sentencesResult = () => {
    Object.values(sentences).forEach(sentence => {
        // console.log(sentence)
    });
}
sentencesResult()

const desiredNumbers = (numArray) => {
    
    const squaredNumbers = []
    let sum = 0 
    numArray.forEach(element => squaredNumbers.push(element*2))
   squaredNumbers.forEach(sqrElement => sum+= sqrElement)
    const avarage = sum / squaredNumbers.length
    return avarage
    


    

}
// console.log(desiredNumbers([5,5,5,10]))

const ourResult = ( arr1 ,arr2) => {
    
   newArray =[ ...arr1 ,...arr2]
   return Math.max(...newArray)

    

}
// console.log(ourResult([5,2,1],[9,8,7]))


const oddArr = [1,3,5,7,9]
for(let num of oddArr){
    num = num + 1
    
    // console.log(num)
   
} 


const evenMaker = evenNum => evenNum+1

    const newArr = [1,3,5,7,9]
    const even = newArr.map(evenMaker)

    // console.log(even)
*/
   
    const disvisibleChecker = num => num % 10 === 0
    const arr = [30,50,78,34,90,53] 
    const selectedNum = arr.find(disvisibleChecker)
    // console.log(selectedNum)



const instructor =[
    {name:'nodi',age:44,position:'senior' },
    {name:'Evan',age:34,position:'junior' },
    {name:'aboni',age:54,position:'senior' }
]

const displayFunction = data =>{
const display = instructor.filter(({position}) =>position === 'senior')


console.log(display)
}
displayFunction()