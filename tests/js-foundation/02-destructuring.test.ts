import {characters} from '../../src/js-foundation/02-destructuring';

describe('02-destructuring',()=>{
    test("characters should containt Flash,Superman",()=>{


        expect(characters).toContain('Flash');
        expect(characters).toContain('Superman');
    });
    test("first character should be  Flash and Second Superman",()=>{
        const [flash,_,superman]=characters;

        expect(flash).toBe('Flash');
        expect(superman).toBe('Superman');
    });
})