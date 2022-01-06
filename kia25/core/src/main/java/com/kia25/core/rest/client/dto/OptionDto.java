package com.kia25.core.rest.client.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class OptionDto {

	/**
	 * 트림코드
	 */
	private String trimCode;
	
	
	/**
	 * 
	 */
	private String carOptionCode;
	
	
	/**
	 * 옵션코드
	 */
	private String optionCode;
	
	
	/**
	 * 옵션명
	 */
	private String optionName;
	
	
	/**
	 * 베스트여부
	 */
	private String bestYn;

	
	/**
	 * 옵션가격
	 */
	private int optionPrice;
	
	
	/**
	 * 옵션이미지경로
	 */
	private String optionImagePath;

	
	/**
	 * 사양코드
	 */
	private String 	specificationCode;
	
	
	/**
	 * 옵션상품번호
	 */
	private String optionProductNumber;
	
	
	/**
	 * 정렬 순서
	 */
	private int sortOrder;
	
	
	/**
	 * 사용 여부
	 */
	private String useYn;
	
	
	public String getTrimCode() {
		return trimCode;
	}


	public void setTrimCode(String trimCode) {
		this.trimCode = trimCode;
	}


	public String getCarOptionCode() {
		return carOptionCode;
	}


	public void setCarOptionCode(String carOptionCode) {
		this.carOptionCode = carOptionCode;
	}


	public String getOptionCode() {
		return optionCode;
	}


	public void setOptionCode(String optionCode) {
		this.optionCode = optionCode;
	}


	public String getOptionName() {
		return optionName;
	}


	public void setOptionName(String optionName) {
		this.optionName = optionName;
	}


	public String getBestYn() {
		return bestYn;
	}


	public void setBestYn(String bestYn) {
		this.bestYn = bestYn;
	}


	public int getOptionPrice() {
		return optionPrice;
	}


	public void setOptionPrice(int optionPrice) {
		this.optionPrice = optionPrice;
	}


	public String getOptionImagePath() {
		return optionImagePath;
	}


	public void setOptionImagePath(String optionImagePath) {
		this.optionImagePath = optionImagePath;
	}


	public String getSpecificationCode() {
		return specificationCode;
	}


	public void setSpecificationCode(String specificationCode) {
		this.specificationCode = specificationCode;
	}


	public String getOptionProductNumber() {
		return optionProductNumber;
	}


	public void setOptionProductNumber(String optionProductNumber) {
		this.optionProductNumber = optionProductNumber;
	}


	public int getSortOrder() {
		return sortOrder;
	}


	public void setSortOrder(int sortOrder) {
		this.sortOrder = sortOrder;
	}


	public String getUseYn() {
		return useYn;
	}


	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}

	
}
