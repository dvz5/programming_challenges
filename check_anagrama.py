""" /*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */ """

def check_anagrama(word1:str,word2:str)-> bool:
    if(len(word1) != len(word2)):
        return False
    
    for letter in word1.lower():
        if(letter not in word2.lower()):
            return False
    return True
    
    
print(check_anagrama('Romina','Marino'))

    
    
    
    
    
    
    