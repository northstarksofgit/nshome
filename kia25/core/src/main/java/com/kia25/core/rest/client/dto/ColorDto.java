package com.kia25.core.rest.client.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ColorDto {

	/* 색상 코드 */
	private String colorCode;
	
	/* 컬러명 */
	private String colorName;
	
	/* 컬러별 추천 */
	private String bestYn;
	
	/* 컬러 가격 */
	private String colorPrice;
	
	/* 컬러 내/외장 */
	private String carOptionCode;
	
	/* 컬러 이미지 */
	private String colorImgPath;
		
	/* 컬러 조각 */
	private String productNumber;

	
	
	public String getColorCode() {
		return colorCode;
	}

	public void setColorCode(String colorCode) {
		this.colorCode = colorCode;
	}

	public String getColorName() {
		return colorName;
	}

	public void setColorName(String colorName) {
		this.colorName = colorName;
	}

	public String getBestYn() {
		return bestYn;
	}

	public void setBestYn(String bestYn) {
		this.bestYn = bestYn;
	}

	public String getColorPrice() {
		return colorPrice;
	}

	public void setColorPrice(String colorPrice) {
		this.colorPrice = colorPrice;
	}


	public String getColorImgPath() {
		return colorImgPath;
	}

	public void setColorImgPath(String colorImgPath) {
		this.colorImgPath = colorImgPath;
	}

	public String getProductNumber() {
		return productNumber;
	}

	public void setProductNumber(String productNumber) {
		this.productNumber = productNumber;
	}

	
	
	
}
