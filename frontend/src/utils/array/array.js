export const toBinaryString = boolArray => boolArray.reduce((acc, b) => acc + +!!b, '')
