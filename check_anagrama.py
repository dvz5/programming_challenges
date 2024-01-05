def check_anagrama(word1:str,word2:str)-> bool:
    if(len(word1) != len(word2)):
        return False
    
    for letter in word1.lower():
        if(letter not in word2.lower()):
            return False
    return True
    
    
print(check_anagrama('Romina','Marino'))

    
    
    
    
    
    
    