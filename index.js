///TEST IF A NUM IS PRIME
function prime(num){
    if(num == 1 || num == 0){
    return false;}

    for (let i = 2; i < num; i++) {
       if (num % i == 0 ) {
           return false;
       }
       else{
           return true;
       }
        
    }
}

// Generador de numeros primos
for (let a = 0; a < 10000; a++) {
    if(prime(a)){
        console.log(a, ' It is prime');
    }
    
}





