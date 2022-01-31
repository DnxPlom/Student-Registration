
function validateEmail(email) {
    let instance = email.split("@")
    if (email.indexOf(" ") >= 0) return false
    else if (instance.length !== 2) return false
    else if (instance[1].split(".").length < 2 || instance[1].split(".").length > 3) return false
    else if (instance[0] === "" || instance[1] === "") return false

    let secondPart = instance[1]
    for (let i=0; i<secondPart.split(".").length-1; i++) {
        if (secondPart[i] === "") return false
    }

    let notAllowed = ['!', '#','$','%','^','&','*','(',')','~', '`',',','/']

    for (let x=0; x<email.length-1; x++) {
        if (email.indexOf(notAllowed[x]) >= 0) return false
    }

    return true

}

function validateNumber(number) {
    let newNum = parseInt(number)
    if (newNum.toString().length !== number.length) return false

    if (newNum.toString() < 10) return false

    return true
}

module.exports = {
    validateEmail,
    validateNumber
}