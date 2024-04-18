import { AES, enc, lib, mode, pad } from 'crypto-js'

export class AESCipher {
    private key: lib.WordArray;
    private iv: lib.WordArray;

    constructor(API_KEY: string) {
        this.key = enc.Utf8.parse(API_KEY);
        this.iv =  lib.WordArray.create(this.key.words.slice(0, 4));
    }

    encrypt(data: Object) {
        const data_string = JSON.stringify(data)
        const cipherText = AES.encrypt(data_string, this.key, {
            iv: this.iv,
            mode: mode.CBC,
            padding: pad.Pkcs7
        });
        return cipherText.toString()
    }

    decrypt(data_encrypted: string) {
        const bytes = AES.decrypt(data_encrypted, this.key, {
            iv: this.iv,
            mode: mode.CBC,
            padding: pad.Pkcs7
        });
        const data_string = bytes.toString(enc.Utf8);
        return JSON.parse(data_string)
    }
}
