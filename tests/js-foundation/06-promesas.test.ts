import {getPokemonById} from '../../src/js-foundation/06-promesas';
describe('06-promesas.ts',()=>{
    test("getPokemonById should return a Pokemon",async ()=>{
        const pokemonId=1;
        const getPokemon = await getPokemonById(pokemonId);

        expect(getPokemon).toBe('bulbasaur');
    });

    test("getPokemonById should return an Error",async ()=>{
        const pokemonId=10000000;
        try {
            const getPokemon = await getPokemonById(pokemonId);
            expect(true).toBeFalsy();
        }
        catch(err){
            expect(err).toBe(`Pokemon not found with id ${pokemonId}`);
        }
       
    });
})