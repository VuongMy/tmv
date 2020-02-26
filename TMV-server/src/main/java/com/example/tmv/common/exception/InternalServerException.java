package com.example.tmv.common.exception;

public class InternalServerException extends RestException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3756839765223660429L;

	public InternalServerException() {
		super("INTERNAL_SERVER_ERROR");
		this.setCode(500);
	}

	public InternalServerException(String message) {
		super(message);
		this.setCode(500);
	}
}
