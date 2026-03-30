export function createFakeIntentsClients() {
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
