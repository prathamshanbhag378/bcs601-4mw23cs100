function findFactorial(){

    let num = parseInt(document.getElementById("number").value);

    let factorial = 1;

    for(let i = 1; i <= num; i++){
        factorial = factorial * i;
    }

    document.getElementById("result").innerHTML =
        "Factorial of " + num + " is " + factorial;
}