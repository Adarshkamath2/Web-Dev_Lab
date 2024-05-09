let arr = prompt("enter array").split(" ");
const posneg = function (arr){
    let a = 0,b = 0, c = 0;

    for (let i = 0;i < arr.length;i++){
        if (arr[i] == 0){
            b += 1;
        }
        else if (arr[i] > 0){
            a += 1;
        }
        else{
            c+=1;
        }

    }
    return {
        pos : a,
        zer : b,
        neg : c
    }

}

const evenodd = (a) => {
    return (a%2 == 0) ? "Even" : "Odd";
}

const sqrti = (a) =>{
    return Math.sqrt(a);
}

const factorial = function (a) {
    let facti = 1;
    for (let i = 2; i <= a; i++){
        facti *= i;
    }
    return facti;
}

const area = (a) =>{
    return a*a;
}

if(arr.length > 1){
    result = posneg(arr)   
    console.log(result)
}
else{
    const a = Number(arr[0])
    console.log("Number = "+ a)
    console.log(a + " is " + evenodd(a))
    console.log("sqrt("+a+")= " + sqrti(a))
    console.log("Factorial("+a+")= " + factorial(a))
    console.log("Square Area("+a+")= " + area(a))
}
