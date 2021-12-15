package com.kia25.core.rest.client.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ColorDto {

	/* colorList 색상 코드 */
	private String colorCode;
	
	/* colorList 컬러명 */
	private String colorName;
	
	/* colorList 컬러별 추천 */
	private String bestYn;
	
	/* colorList 컬러 가격 */
	private String colorPrice;
		
	/* colorList 컬러 내/외장 	 * i : 인테리어	 * e : 익스테리어 */
	private String carOptionCode;
	

	/* colorList 컬러 이미지 */
	private String colorImgPath;
		
	/* colorList 컬러 조각 */
	private String productNumber;
	
	
	
	/* exteriorList 가격  */
	private String cellvehiclePrice;
	
	/* exteriorList 색상조각  */
	private String carcelImage;
	
	/**
	 * selected Model Name
	 */
	private String modelName;
	
	
	/**
	 * selected Model Code
	 */
	private String modelCode;
	
	
	/**
	 * selected Trim Code
	 */
	private String trimCode;
	
	
	/**
	 * selected Trim Code
	 */
	private String trimName;
	

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

	public String getCarOptionCode() {
		return carOptionCode;
	}

	public void setCarOptionCode(String carOptionCode) {
		this.carOptionCode = carOptionCode;
	}

	public String getTrimCode() {
		return trimCode;
	}

	public void setTrimCode(String trimCode) {
		this.trimCode = trimCode;
	}
	
	
	/* exteriorList */
	public String getCellvehiclePrice() {
		return cellvehiclePrice;
	}

	public void setCellvehiclePrice(String cellvehiclePrice) {
		this.cellvehiclePrice = cellvehiclePrice;
	}

	public String getCarcelImage() {
		return carcelImage;
	}

	public void setCarcelImage(String carcelImage) {
		this.carcelImage = carcelImage;
	}

	/* model code, trim name */
	public String getTrimName() {
		return trimName;
	}

	public void setTrimName(String trimName) {
		this.trimName = trimName;
	}

	public String getModelCode() {
		return modelCode;
	}

	public void setModelCode(String modelCode) {
		this.modelCode = modelCode;
	}

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}
	
	


}
