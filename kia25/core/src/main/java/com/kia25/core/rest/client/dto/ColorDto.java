package com.kia25.core.rest.client.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ColorDto {

	private String colorCode;

	private String colorName;

	private String bestYn;

	private String colorPrice;

	private String carOptionCode;

	private String carimagepath;

	private String cellvehiclePrice;

	private String colorimagepath;

	private String modelName;

	private String modelCode;

	private String trimCode;

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

	public String getCarOptionCode() {
		return carOptionCode;
	}

	public void setCarOptionCode(String carOptionCode) {
		this.carOptionCode = carOptionCode;
	}

	public String getcarimagepath() {
		return carimagepath;
	}

	public void setcarimagepath(String carimagepath) {
		this.carimagepath = carimagepath;
	}

	public String getCellvehiclePrice() {
		return cellvehiclePrice;
	}

	public void setCellvehiclePrice(String cellvehiclePrice) {
		this.cellvehiclePrice = cellvehiclePrice;
	}


	public String getCarimagepath() {
		return carimagepath;
	}

	public String getColorimagepath() {
		return colorimagepath;
	}

	public void setCarimagepath(String carimagepath) {
		this.carimagepath = carimagepath;
	}

	public void setColorimagepath(String colorimagepath) {
		this.colorimagepath = colorimagepath;
	}

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	public String getModelCode() {
		return modelCode;
	}

	public void setModelCode(String modelCode) {
		this.modelCode = modelCode;
	}

	public String getTrimCode() {
		return trimCode;
	}

	public void setTrimCode(String trimCode) {
		this.trimCode = trimCode;
	}

	public String getTrimName() {
		return trimName;
	}

	public void setTrimName(String trimName) {
		this.trimName = trimName;
	}

	 
}
