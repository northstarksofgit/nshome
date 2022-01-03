package com.kia25.core.rest.client.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ColorDto {

	private String colorCode;

	private String colorName;

	private String bestYn;

	private String colorPrice;

	private String carOptionCode;

	private String carImagePath;

	private String colorImagePath;

	private String modelName;

	private String modelCode;

	private String trimCode;

	private String trimName;
	

	public String getColorCode() {
		return colorCode;
	}

	public String getColorName() {
		return colorName;
	}

	public String getBestYn() {
		return bestYn;
	}

	public String getColorPrice() {
		return colorPrice;
	}

	public String getCarOptionCode() {
		return carOptionCode;
	}

	public String getCarImagePath() {
		return carImagePath;
	}

	public String getColorImagePath() {
		return colorImagePath;
	}

	public String getModelName() {
		return modelName;
	}

	public String getModelCode() {
		return modelCode;
	}

	public String getTrimCode() {
		return trimCode;
	}

	public String getTrimName() {
		return trimName;
	}

	public void setColorCode(String colorCode) {
		this.colorCode = colorCode;
	}

	public void setColorName(String colorName) {
		this.colorName = colorName;
	}

	public void setBestYn(String bestYn) {
		this.bestYn = bestYn;
	}

	public void setColorPrice(String colorPrice) {
		this.colorPrice = colorPrice;
	}

	public void setCarOptionCode(String carOptionCode) {
		this.carOptionCode = carOptionCode;
	}

	public void setCarImagePath(String carImagePath) {
		this.carImagePath = carImagePath;
	}

	public void setColorImagePath(String colorImagePath) {
		this.colorImagePath = colorImagePath;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	public void setModelCode(String modelCode) {
		this.modelCode = modelCode;
	}

	public void setTrimCode(String trimCode) {
		this.trimCode = trimCode;
	}

	public void setTrimName(String trimName) {
		this.trimName = trimName;
	}
	
}
