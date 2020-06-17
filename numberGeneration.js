
// generate a number between min and max 
export function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}