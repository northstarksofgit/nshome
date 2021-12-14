package com.kia25.core.rest.client.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CarGroupListDto {

	/**
	 * build002 컴포넌트 carGroupListDto
	 */
	
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
//	
//	/**
//	 * 모델 코드
//	 */
//	private String carGroupCode;
//	
//	/**
//	 * 전시 대표차 종명
//	 */
//	private String carGroupName;
	
	/**
	 * 모델 대표 이미지
	 */
	private String carImagePath;
	
	
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

//	public String getCarGroupCode() {
//		return carGroupCode;
//	}
//
//
//	public void setCarGroupCode(String carGroupCode) {
//		this.carGroupCode = carGroupCode;
//	}
//
//
//	public String getCarGroupName() {
//		return carGroupName;
//	}
//
//
//	public void setCarGroupName(String carGroupName) {
//		this.carGroupName = carGroupName;
//	}


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
