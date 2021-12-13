package com.kia25.core.rest.client.dto;

public class ModelListDtoResults {
	
	/**
	 * 결과 코드
	 */
	private String resultCode;
	
	/**
	 * 상세 코드
	 */
	private String detailCode;
	
	/**
	 * 메세지
	 */
	private String resultMessage;
	
	/**
	 * 상세 결과
	 */
	private String detailMessage;
	
	/**
	 * Data 가져오기
	 */
	private ModelListDto data;

	
	/**
	 * getter / setter
	 */
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

	public ModelListDto getData() {
		return data;
	}

	public void setData(ModelListDto data) {
		this.data = data;
	}

	
	
}
