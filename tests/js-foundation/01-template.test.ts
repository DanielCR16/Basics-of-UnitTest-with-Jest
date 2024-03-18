import {emailTemplate} from '../../src/js-foundation/01-template';
//A A A
describe('01-template.test',()=>{
    test('emailTemplate Should contain a greeting',()=>{
        
        expect(emailTemplate).toContain('Hi,')
    });

    test('emailTemplate Should contain a {{name}} and {{orderId}}',()=>{
        
        expect(emailTemplate).toContain('{{name}}');
        expect(emailTemplate).toContain('{{orderId}}');
    });
});