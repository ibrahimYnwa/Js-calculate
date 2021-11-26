
//calculate function

function count(num1, num2, mark) {
    switch (mark) {
      case "*":
        return num1 * num2;
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "/":
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return "dont divide by zero";
        }
    }
  }


  let num=21;
let array=[1,2,6,4,12,13,14,15,21,25]
array.forEach(number => {
    
    if (number==num) {
        console.log("true");
        break;
    }
   
});
  


 //even numbers

let getEvenNumbers=() =>{
    const arr = [3,9,14,21,48];
    let the_evens = arr.filter(number=> number %2==0) ;
    console.log(the_evens);
}
getEvenNumbers();





 

