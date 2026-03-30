"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FakeOauthError", {
    enumerable: true,
    get: function() {
        return FakeOauthError;
    }
});
class FakeOauthError {
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
