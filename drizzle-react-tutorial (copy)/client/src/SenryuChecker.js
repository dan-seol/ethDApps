//TODO: implement this
import {syllable} from 'syllable';

const syllableRequirements = [5,7,5];

let checkLines = (lines, n) => {
    
    console.log(`Checking whether the poem: ${lines} has ${n} lines`);
    
    return lines.length === n;

}

let checkLineForSyllableCount = (line, n) => {
    
    console.log(`Checking whether the line: ${line} has ${n} syllables`);
    let words = line.split(/(\s+)/);
    
    return words.map(syllable).reduce((prev, curr) => prev + curr) === n;
}

export function checkSenryu(poem) {
    
    let lines = (''+poem).split(/[\r\n]+/);

    return checkLines(lines, 3) && [0,1,2].every((i) => checkLineForSyllableCount(lines[i], syllableRequirements[i]));
    
}