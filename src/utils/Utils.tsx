
export const isValidNumber = (str: string) => {
    if(!str) return false

    const regex = /^(?!0*[.,]?0+$)\d*[.,]?\d+$/
    const validated = str.match(regex)

    return validated

    // console.log("from fn", str);
    

    // console.log("match", validated);

    // if(validated) return 
}