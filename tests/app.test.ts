//A A A


describe('Test in the App File',()=>{


    test("Should be 30",()=>{
        //1-ARRANGE
    const num1:number=10;
    const num2:number=20;
         //2- ACT
    const  result = num1+num2;
        //3-  ASSERT
        expect(result).toBe(30);
    });



});