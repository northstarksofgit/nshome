package com.kia25.core.rest.client.dto.categoryModel;

public class CategoryListDtoResults {
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
    private CategoryListDto data;
    
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

	public CategoryListDto getData() {
		return data;
	}

	public void setData(CategoryListDto data) {
		this.data = data;
	}	

}