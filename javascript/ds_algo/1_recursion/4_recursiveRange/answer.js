const recursiveRange = (num) => {
    if (num === 0) return null
    
    return num + recursiveRange(num - 1)
}