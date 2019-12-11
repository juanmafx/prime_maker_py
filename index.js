function primo(numero) {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
  
    }
  
    return true;
  }
  
  
  for (let i = 0; i < 10000; i++) {
      if(primo(i)){
          console.log(i, 'It is prime');
      }
      
  }
