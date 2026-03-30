export class FakeOauthError {
    constructor(oauthCode, message, uri){
        this.oauthCode = oauthCode;
        this.message = message;
        this.uri = uri;
        this.name = 'FakeOauthError';
        this.code = 'bad_request';
        this.rawMessage = 'error';
        this.rawMessage = message;
    }
}
