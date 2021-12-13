package com.kia25.core.rest.client.dto.TrimModel;

public class TrimListDtoResult {

	/**
	 * build002 컴포넌트 TrimListDtoResult
	 */
	
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
	private TrimListDto trimData;

	
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

	public TrimListDto getTrimData() {
		return trimData;
	}

	public void setTrimData(TrimListDto trimData) {
		this.trimData = trimData;
	}

	
	
}
