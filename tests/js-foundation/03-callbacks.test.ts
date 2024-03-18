import {getUserById} from '../../src/js-foundation/03-callbacks';

describe('03-callbacks',()=>{
test('getUserById Should return an error fi user does not exist',(done)=>{
    const id=10;
    getUserById(id,(err,us)=>{

        expect(err).toBe(`USUARIO NO ENCONTRADO ${id}`);
        expect(us).toBeUndefined();
        done();
    });
});

test('getUserById Should return user',(done)=>{
    const id=1;
    const userMock= {id:1,name:"Jhon Doe"};
    getUserById(id,(err,us)=>{


        expect(us).toEqual({id:1,name:"Jhon Doe"});
        expect(us?.name).toBe(`Jhon Doe`);
        expect(us?.id).toBe(1);
        expect(userMock.name).toEqual(us?.name);
        done();
    });
});
})