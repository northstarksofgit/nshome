package com.kia25.core.rest.client.dto.option;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class OptionDto {

	/**
	 * 옵션상품번호
	 */
	private String optionProductNumber;
	
	/**
	 * 옵션명
	 */
	private String optionName;
	
	/**
	 * 옵션가격
	 */
	private String optionPrice;
	
	/**
	 * 옵션이미지경로
	 */
	private String optionalImagePath;
	
	/**
	 * 사양코드
	 */
	private String specificationCode;
	
	/**
	 * 베스트여부
	 */
	private String bestYn;
	

	public String getOptionProductNumber() {
		return optionProductNumber;
	}

	public void setOptionProductNumber(String optionProductNumber) {
		this.optionProductNumber = optionProductNumber;
	}

	public String getOptionName() {
		return optionName;
	}

	public void setOptionName(String optionName) {
		this.optionName = optionName;
	}

	public String getOptionPrice() {
		return optionPrice;
	}

	public void setOptionPrice(String optionPrice) {
		this.optionPrice = optionPrice;
	}

	public String getOptionalImagePath() {
		return optionalImagePath;
	}

	public void setOptionalImagePath(String optionalImagePath) {
		this.optionalImagePath = optionalImagePath;
	}

	public String getSpecificationCode() {
		return specificationCode;
	}

	public void setSpecificationCode(String specificationCode) {
		this.specificationCode = specificationCode;
	}

	public String getBestYn() {
		return bestYn;
	}

	public void setBestYn(String bestYn) {
		this.bestYn = bestYn;
	}
	
	
	
}
