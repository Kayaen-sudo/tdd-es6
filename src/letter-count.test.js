import {getLetterCount} from './letter-count';
import {expect} from 'chai';//import assertions from chai 

// Top group similar tests together 
//(title of test being run, function that contains actual test we want to run)
describe('getLetterCount - basic functionality', () => {
    it('returns empty onject when passed empty string', () =>{
        const expected ={};
        const actual = getLetterCount('');
        expect(actual).to.deep.equal(expected); //Deep keyword for object comparison 
    });

    it('return the correct letter count for a word with only one of each letter', ()=>{
        const expected = {c: 1, a: 1, t: 1};
        const actual = getLetterCount('cat');
        expect(actual).to.deep.equal(expected);
    })

    it('return the correct letter count for a word with more than one of each letter', ()=>{
        const expected = {m: 1, i: 4 , s: 4, p: 2};
        const actual = getLetterCount('mississippi');
        expect(actual).to.deep.equal(expected);
    });
})