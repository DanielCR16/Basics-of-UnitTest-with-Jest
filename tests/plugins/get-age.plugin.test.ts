import {getAge} from '../../src/plugins/get-age.plugin';
const getAgePlugin=require('get-age');

describe('get-age.plugin',()=>{
    test("getAge should return the age of a person",()=>{
        const date ='1998-01-16';
        const age=getAge(date);
        expect(typeof age).toBe('number');
        expect(age).toBe(26);
    });
    test('getAge shopudl return current age',()=>{
        const date ='1998-01-16';
        const age=getAge(date);
        const calCulateAge= getAgePlugin(date);
        expect(age).toEqual(calCulateAge);
    });
    test('getAge should Return 0 years',()=>{
        const spy = jest.spyOn(Date.prototype,'getFullYear').mockReturnValue(1995);
        const date ='1998-01-16';
        const age =getAge(date);
        expect(age).toBe(0);
    })
})