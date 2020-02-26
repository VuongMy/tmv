package com.example.tmv.common.exception;

public class RestException extends RuntimeException {

	private int code;
	private String message;

	public RestException() {
		super();
	}

	public RestException(String message) {
		super();
		this.message = message;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
