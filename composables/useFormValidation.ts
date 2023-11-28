const emailValidation = (email: string): Array<string> => {
    const errors: string[] = []
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Check if the email matches the basic format
    if (!emailRegex.test(email)) {
        errors.push(`${email} is not a valid email`)
    }
    
    // Check for consecutive dots in the domain part (e.g., test@example..com)
    if (/(\.{2,})/.test(email)) {
        errors.push('Your email contains multiple dots')
    }
    
    // Check for special characters in the domain (e.g., test@exa_mple.com)
    const domain = email.split('@')[1]
    if (/[^\w\\.-]/.test(domain)) {
        errors.push(`Unexpected characters are found in your domain ${domain}`)
    }

    return errors
}

const passwordValidation = (password: string): Array<string> => {
    const errors: Array<string> = []

    if (password.length < 12) {
        errors.push('Passphrase must be atleast 12 characters long')
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        errors.push('Passphrase must include at least one lowercase letter')
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        errors.push('Passphrase must include at least one uppercase letter')
    }

    // Check for at least one digit
    if (!/\d/.test(password)) {
        errors.push('Passphrase must include at least one number')
    }

    // Check for at least one special character
    if (!/[!@#$%^&*()_+{}\\[\]:;<>,.?~\\-]/.test(password)) {
        errors.push('Passphrase must include at least one special character (!, @, # etc.)')
    }

    return errors
}

export default (value: string, type: string, name: string = 'Field'): Array<string> => {
    const errors: string[] = []

    if (value.length === 0) {
        errors.push(`${name} cannot be empty`)
        return errors
    }

    if (type === 'email') {
        const emailErrors = emailValidation(value)
        errors.push(...emailErrors)
    }

    if (type === 'password') {
        const passwordErrors = passwordValidation(value)
        errors.push(...passwordErrors)
    }

    return errors
}