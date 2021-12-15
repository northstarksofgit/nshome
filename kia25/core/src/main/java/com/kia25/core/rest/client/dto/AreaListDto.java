package com.kia25.core.rest.client.dto;

import java.util.List;

public class AreaListDto {

	private String modelCode;
	
	private String modelName;
	
	private String trimCode;
	
	private String trimName;
	
	private String carImagePath;
	
	private String extColorName;
	
	private String extColorCode;
	
	private String intColorName;
	
	private String intColorCode;
	
	private String optionCode;
	
	private String optionName;

	private List<AreaDto> areaList;
	
	private List<TransDto> transList;
	
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

	public String getCarImagePath() {
		return carImagePath;
	}

	public void setCarImagePath(String carImagePath) {
		this.carImagePath = carImagePath;
	}

	public String getExtColorName() {
		return extColorName;
	}

	public void setExtColorName(String extColorName) {
		this.extColorName = extColorName;
	}

	public String getExtColorCode() {
		return extColorCode;
	}

	public void setExtColorCode(String extColorCode) {
		this.extColorCode = extColorCode;
	}

	public String getIntColorName() {
		return intColorName;
	}

	public void setIntColorName(String intColorName) {
		this.intColorName = intColorName;
	}

	public String getIntColorCode() {
		return intColorCode;
	}

	public void setIntColorCode(String intColorCode) {
		this.intColorCode = intColorCode;
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

	public List<AreaDto> getAreaList() {
		return areaList;
	}

	public void setAreaList(List<AreaDto> areaList) {
		this.areaList = areaList;
	}

	public List<TransDto> getTransList() {
		return transList;
	}

	public void setTransList(List<TransDto> transList) {
		this.transList = transList;
	}

}
