import validateUsernameLen from "../scripts"

describe('validateUsernameLen', () => {
    it('should return true if there is at least 3 characters', () => {
        const result = validateUsernameLen("#emailEmpty")
        console.log(result)
    })
})