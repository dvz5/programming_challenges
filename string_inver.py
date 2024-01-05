def string_invert (word):
    str_out = ''
    for i in range(len(word)-1,-1,-1):
        str_out+= word[i]
    return str_out
print(string_invert('hola amigos de youtube'))
    
    
    