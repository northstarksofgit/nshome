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
	private String optionPrice;
	
	
	/**
	 * 옵션이미지경로
	 */
	private String optionalImgPath;

	
	/**
	 * 사양코드
	 */
	private String 	specificationCode;
	
	
	/**
	 * 옵션상품번호
	 */
	private String optionProductNumber;
	
	
	
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


	public String getOptionPrice() {
		return optionPrice;
	}


	public void setOptionPrice(String optionPrice) {
		this.optionPrice = optionPrice;
	}


	public String getOptionalImgPath() {
		return optionalImgPath;
	}


	public void setOptionalImgPath(String optionalImgPath) {
		this.optionalImgPath = optionalImgPath;
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

	
	
	
}
