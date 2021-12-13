package com.kia25.core.rest.client.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ModelDto {
	
	/**
	 * 차종 카테고리 코드
	 */
	private String categoryCode;
	
	/**
	 * 차종 카테고리 명
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
	 * 전시 대표 차 종명
	 */
	private String carModelName;
	
	/**
	 * 대표 차량 이미지
	 */
	private String carImagePath;
	
	
	
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


}
