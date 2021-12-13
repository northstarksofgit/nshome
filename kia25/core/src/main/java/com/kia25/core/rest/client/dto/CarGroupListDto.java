package com.kia25.core.rest.client.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CarGroupListDto {
	
	/**
	 * 선택된 카테고리 코드
	 */
	private String categoryCode;

	/**
	 * 선택된 카테고리 이름
	 */
	private String categoryName;

	/**
	 * 선택된 모델 코드
	 */
	private String modelCode;

	/**
	 * 선택된 모델 연식 코드
	 */
	private String modelYear;

	/**
	 * 선택된 전시 대표 차 종명
	 */
	private String carModelName;

	/**
	 * 선택된 대표 차량 이미지
	 */
	private String carImagePath;
	
	
	/**
	 * build002 컴포넌트 carGroupListDto
	 */
	private List<CarGroupDto> carGroupList;

	
	
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


}
