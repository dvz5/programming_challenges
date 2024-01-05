def check_primo(n):
    for i in range(2,n):
        if(n%i==0):
            return False
    return True
#print(check_primo(90))
def primos(n):
    primos = []
    for i in range(1,n+1):
        if(check_primo(i)):
         primos.append(i)           
    print(primos)
primos(100)