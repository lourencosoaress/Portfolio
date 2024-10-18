package com.example.linkshortener.service;

import org.springframework.stereotype.Service;

@Service
public class BaseConversion {

    private static final String allowedString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    private char[] allowedCharacters = allowedString.toCharArray();
    private int base = allowedCharacters.length;

    public String encode(int input) {
        String encodedString = "";

        if(input == 0)
            return String.valueOf(allowedCharacters[0]);

        while (input > 0) {
            encodedString = allowedCharacters[(int) (input % base)] + encodedString;
            input /= base;
        }

        return encodedString;
    }

    public int decode(String input) {
        char[] chars = input.toCharArray();

        int decoded = 0;

        for(int i = 0; i < chars.length; i++)
            decoded += allowedString.indexOf((int) (chars[i] * Math.pow(base, chars.length - i + 1)));

        return decoded;
    }
}
