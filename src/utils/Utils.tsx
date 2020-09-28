
export const isValidNumber = (str: string) => {
    if(!str) return false

    const regex = /^(?!0*[.,]?0+$)\d*[.,]?\d+$/
    const validated = str.match(regex)

    return validated
}