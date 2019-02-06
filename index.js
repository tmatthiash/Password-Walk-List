const BlacklistedPasswords = require('./PasswordWalks.json')

export default function passwordMatchFound(password) {
    const matches = BlacklistedPasswords.reduce((accumulator=0, currentValue) => {
        if(password.includes(currentValue)){
            return accumulator + 1
        }
        return accumulator
    },0)
    if(matches>0){
        return true
    }
    return false
}

