package com.example.tmv.common;

public class StandardResponse<T> {

	private Integer code;
	private String message;
	private T value;

	public Integer getCode() {
		return code;
	}

	public String getMessage() {
		return message;
	}

	public T getValue() {
		return value;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public void setValue(T value) {
		this.value = value;
	}

	public StandardResponse<T> getErrorResponse(T result) {
		setCode(ResponseResult.FAIL_CODE);
		setMessage(ResponseResult.FAIL_MESSAGE);
		setValue(result);
		return this;
	}

	public StandardResponse<T> getSuccessResponse(T result) {
		setCode(ResponseResult.SUCCESS_CODE);
		setMessage(ResponseResult.SUCCESS_MESSAGE);
		setValue(result);
		return this;
	}

}
