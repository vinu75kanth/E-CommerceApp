package com.example.BackEnd;

public class CustomException extends RuntimeException {
    public CustomException(String message) {
        super(message);
    }
}
