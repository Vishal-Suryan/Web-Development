/**
 * 
 * @param {the word which is given as input as is expected to be guessed} originalWord 
 * @param {Letters which are guessed by the user already} guessedWord 
 */
export function getMaskedString(originalWord,guessedLetters){
    guessedLetters= guessedLetters.map(letter => letter.toUpperCase());

    const guessedLetterSet =new Set(guessedLetters);
    const result =originalWord.toUpperCase().split('').map(char=>{
        if(guessedLetterSet.has(char)){
            return char;
        }else{
            return "_";
        }
    });
    
    return result.join('');

}