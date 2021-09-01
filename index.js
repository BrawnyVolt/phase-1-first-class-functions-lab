function returnFirstTwoDrivers(arrayOfDrivers){
  let tempArray = arrayOfDrivers.slice(0,2)
  return tempArray
}

function returnLastTwoDrivers(arrayOfDrivers){
  let tempArray = arrayOfDrivers.slice(-2)
  return tempArray
}
// function selectingDrivers(){
//   let newArray = [returnFirstTwoDrivers, returnLastTwoDrivers]
//   return newArray
// }
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
 return function fareTaker(fare){return num * fare}
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)



function selectDifferentDrivers(arrayOfDrivers, func){
if(func === returnFirstTwoDrivers){
return returnFirstTwoDrivers(arrayOfDrivers);
} else {return returnLastTwoDrivers(arrayOfDrivers)}
  
}
  // return chooser(func)
//   selectDifferentDrivers(drivers, returnFirstTwoDrivers))




//   if first run returnFirstTwoDrivers
// function 
// else run second drives
// let something = result
// return something
// }

//     selectingDrivers
//       3) has the `returnFirstTwoDrivers` function to as its first element
//       4) has the `returnLastTwoDrivers` function to as its last element
//       5) allows us to invoke either function from the array
//     createFareMultiplier()
//       6) returns a function
//       7) should multiply a given value using the created multiplier
//     fareDoubler()
//       8) is a function
//       9) doubles fares
//     fareTripler()
//       10) is a function
//       11) triples fares
//     selectDifferentDrivers(arrayOfDrivers, function)
//       12) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
//       13) returns the last two drivers when passed returnLastTwoDrivers() as the second argument