const count_word = (word, text) => {
    let current_word = ''
    let count = 0
    for (let letter of text) {
        current_word += letter

        if (letter === ' ') {
            current_word = ''
        }
        if (current_word.toUpperCase() === word.toUpperCase()) {
            count += 1
        }

    }
    return count
}

console.log(count_word('llamo', 'hola me llamo jose, soy jose y me llamo jose jose jose nose     jose'))