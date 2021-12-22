package com.kia25.core.rest.client.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ModelDetailListDto {
	
	/**
	 * 카테고리 코드
	 */
	private String categoryCode;
	
	/**
	 * 모델 코드
	 */
	private String modelCode;
	
	/**
	 * 모델 연식 코드
	 */
	private String modelYear;
	
	/**
	 * 모델 명
	 */
	private String modelName;
	
	/**
	 * 모델 대표 이미지
	 */
	private String carImagePath;
	
	
	private List<CarGroupDto> carGroupList;

	private List<TransmissionDto> TransmissionList;
	
	private List<TrimDto> trimList;

	
	/**
	 * getter / setter 
	 */
	public String getCategoryCode() {
		return categoryCode;
	}

	public void setCategoryCode(String categoryCode) {
		this.categoryCode = categoryCode;
	}

	public String getModelCode() {
		return modelCode;
	}

	public void setModelCode(String modelCode) {
		this.modelCode = modelCode;
	}

	public String getModelYear() {
		return modelYear;
	}

	public void setModelYear(String modelYear) {
		this.modelYear = modelYear;
	}

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	public String getCarImagePath() {
		return carImagePath;
	}

	public void setCarImagePath(String carImagePath) {
		this.carImagePath = carImagePath;
	}

	public List<CarGroupDto> getCarGroupList() {
		return carGroupList;
	}

	public void setCarGroupList(List<CarGroupDto> carGroupList) {
		this.carGroupList = carGroupList;
	}

	public List<TransmissionDto> getTransmissionList() {
		return TransmissionList;
	}

	public void setTransmissionList(List<TransmissionDto> transmissionList) {
		TransmissionList = transmissionList;
	}

	public List<TrimDto> getTrimList() {
		return trimList;
	}

	public void setTrimList(List<TrimDto> trimList) {
		this.trimList = trimList;
	}
	


}
