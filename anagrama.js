

const calc_palindromo = (str1) => {
    let step = 0
    const size_ = str1.length

    for (let i = 0; i < parseInt(size_ / 2); i++) {
        step += 1
        if (str1[i] !== str1[size_ - 1 - i]) {
            return false
        }
    }
    return true
}


console.log(calc_palindromo('raeer'))