package com.anonymous.OTP;

public class RNSmsUserConsentException extends RuntimeException {
    public String code;

    RNSmsUserConsentException(Errors error, String message) {
        super(message);
        this.code = error.toString();
    }
}
