"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get OauthError () {
        return OauthError;
    },
    get auth () {
        return auth;
    },
    get monetization () {
        return monetization;
    }
});
const auth = canva_sdk.user.v2.authentication;
const monetization = canva_sdk.user.v2.monetization;
const OauthError = canva_sdk.user.v2.OauthError;
