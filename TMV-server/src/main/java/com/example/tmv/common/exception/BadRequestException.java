package com.example.tmv.common.exception;

public class BadRequestException extends RestException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6688104726201054898L;

	public BadRequestException() {
		super("BAD_REQUEST");
		this.setCode(400);
	}

	public BadRequestException(String message) {
		super(message);
		this.setCode(400);
	}

}
