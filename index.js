
const BlacklistedPasswords = require('./PasswordWalks.json')

export default function passwordMatchFound(password) {
    for (let i = 0; i < BlacklistedPasswords.length; i++) {
        if (password.includes(BlacklistedPasswords[i])) {
            return true;
        }
    }
    return false
}