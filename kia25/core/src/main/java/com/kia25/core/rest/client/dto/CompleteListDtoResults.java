package com.kia25.core.rest.client.dto;

public class CompleteListDtoResults {
	/**
	 * 결과코드
	 */
	private String resultCode;
	/**
	 * 상세코드
	 */
	private String detailCode;
	/**
	 * 결과
	 */
	private String resultMessage;
	/**
	 * 상세결과
	 */
	private String detailMessage;

	/**
	 * Data
	 */
	private CompleteListDto data;

	public String getResultCode() {
		return resultCode;
	}

	public void setResultCode(String resultCode) {
		this.resultCode = resultCode;
	}

	public String getDetailCode() {
		return detailCode;
	}

	public void setDetailCode(String detailCode) {
		this.detailCode = detailCode;
	}

	public String getResultMessage() {
		return resultMessage;
	}

	public void setResultMessage(String resultMessage) {
		this.resultMessage = resultMessage;
	}

	public String getDetailMessage() {
		return detailMessage;
	}

	public void setDetailMessage(String detailMessage) {
		this.detailMessage = detailMessage;
	}

	public CompleteListDto getData() {
		return data;
	}

	public void setData(CompleteListDto data) {
		this.data = data;
	}

}
