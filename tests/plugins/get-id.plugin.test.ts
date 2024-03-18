import {getUUID} from '../../src/plugins/get-id.plugin';
describe("get-id",()=>{
    test('getIdPlugin should return a UUID',()=>{
        const id=getUUID();

        expect(typeof id).toBe('string');
        expect(id.length).toBe(36);

    })
})