import {buildLogger,logger as wistonLoger} from '../../src/plugins/logger.plugin';

describe('logger.plugin.ts',()=>{
    test('buildLogger should be return a function logger',()=>{
        const logger = buildLogger('test');

        expect(typeof logger.error).toBe('function');
        expect(typeof logger.log).toBe('function');
    });
    test('logger.log should log a message',()=>{
        //crear el spy para el metodo log
        const wistonLoggerMock = jest.spyOn(wistonLoger,'log');
        const message = 'test message';
        const service = 'test service';
          //crear el spy para el metodo log
        const logger = buildLogger(service);
        //llamar al log con el message
        logger.log(message);


        expect(wistonLoggerMock).toHaveBeenCalled();
        expect(wistonLoggerMock).toHaveBeenCalledWith(
            'info',
            expect.objectContaining({
                level:'info',
                message,
                service,
            }),
            );

    });
})