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
	 * 카테고리 명
	 */
	private String categoryName;
	
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
	private String carModelName;
	
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

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
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

	public String getCarModelName() {
		return carModelName;
	}

	public void setCarModelName(String carModelName) {
		this.carModelName = carModelName;
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
