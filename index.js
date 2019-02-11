const BlacklistedPasswords = require('./PasswordWalks.json')

export default Array.of(BlacklistedPasswords).forEach((pattern)=>{
    if(password.includes(pattern)){
        return true
    }
    return false
})

