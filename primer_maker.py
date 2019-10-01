##FUNCION PARA DETERMINAR SI UN NUMERO ES PRIMO O NO
def is_prime(num):
    if num == 0 or num == 1:
        return False
    for x in range(2, num):
        if num % x == 0:
            return False
    else:
        return True

## GENERADOR DE NUMEROS PRIMOS DESDE 
alfa=0
for i in range(2,100):
    if is_prime(i):
        alfa=alfa+1

print(alfa)
        
    
        
