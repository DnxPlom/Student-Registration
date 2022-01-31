
const encode = (input) => {
    
    let str = ""
    let count = 1
    let previous = input[0]

    for (let i=1; i<=input.length; i++) {
        if (previous === input[i]) {
            count += 1
        }
        else {
            str += `${count}${previous}`
            previous = input[i]
            count = 1
        }
    }

    return str
}
console.log(encode("aaabbbbccdaa"))
console.log()
console.log(encode("aadddndnnasnnndrtttttttt"))