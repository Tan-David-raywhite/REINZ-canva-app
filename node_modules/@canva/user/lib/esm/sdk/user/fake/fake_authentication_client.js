export class FakeAuthenticationClient {
    async getCanvaUserToken() {
        await this.delay();
        return 'CanvaUserToken';
    }
    initOauth(options) {
        if (options?.type === 'multi_account') return {
            authorize: async ()=>{
                await this.delay();
                return {
                    status: 'completed',
                    scope
                };
            },
            requestAuthorization: async ()=>{
                await this.delay();
                return {
                    status: 'completed',
                    scope
                };
            },
            getAccount: async ({ accountId })=>{
                await this.delay();
                return {
                    account: {
                        id: accountId,
                        principal: 'john.doe@example.com',
                        displayName: 'John Doe',
                        avatarUrl: 'https://example.com/avatar.png',
                        expired: false,
                        getAccessToken: async ()=>{
                            await this.delay();
                            return {
                                token: 'token',
                                scope
                            };
                        },
                        deauthorize: async ()=>{
                            await this.delay();
                        }
                    }
                };
            },
            getAccounts: async ()=>{
                await this.delay();
                return {
                    accounts: [
                        {
                            id: '123',
                            principal: 'john.doe@example.com',
                            displayName: 'John Doe',
                            avatarUrl: 'https://example.com/avatar.png',
                            expired: false,
                            getAccessToken: async ()=>{
                                await this.delay();
                                return {
                                    token: 'token',
                                    scope
                                };
                            },
                            deauthorize: async ()=>{
                                await this.delay();
                            }
                        }
                    ]
                };
            }
        };
        const scope = new Set();
        return {
            authorize: async ()=>{
                await this.delay();
                return {
                    status: 'completed',
                    scope
                };
            },
            requestAuthorization: async ()=>{
                await this.delay();
                return {
                    status: 'completed',
                    scope
                };
            },
            getAccessToken: async ()=>{
                await this.delay();
                return {
                    token: 'token',
                    scope
                };
            },
            deauthorize: async ()=>{
                await this.delay();
            }
        };
    }
    constructor(delay){
        this.delay = delay;
    }
}
