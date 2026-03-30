"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createFakeIntentsClients", {
    enumerable: true,
    get: function() {
        return createFakeIntentsClients;
    }
});
function createFakeIntentsClients() {
    return {
        intents: {
            v1: {
                design: {
                    prepareDesignEditor: ()=>{}
                },
                data: {
                    prepareDataConnector: ()=>{}
                },
                content: {
                    prepareContentPublisher: ()=>{}
                }
            }
        }
    };
}
