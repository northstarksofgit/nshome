package com.kia25.core.rest.client.dto.TrimModel;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CarGroupDto {
	
	/**
	 * build002 컴포넌트 carGroupDto
	 */
	
	/**
	 * 모델 코드
	 */
	private String modelCode;
	
	/**
	 * 모델 연식 코드
	 */
	private String modelYear;
	
	/**
	 * 모델 코드
	 */
	private String carGroupCode;
	
	/**
	 * 전시 대표차 종명
	 */
	private String carGroupName;

	/**
	 * 모델 사진
	 */
	private String carImagePath;
	
	
	/**
	 * getter / setter
	 */
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

	public String getCarGroupCode() {
		return carGroupCode;
	}

	public void setCarGroupCode(String carGroupCode) {
		this.carGroupCode = carGroupCode;
	}

	public String getCarGroupName() {
		return carGroupName;
	}

	public void setCarGroupName(String carGroupName) {
		this.carGroupName = carGroupName;
	}
	
	public String getCarImagePath() {
		return carImagePath;
	}

	public void setCarImagePath(String carImagePath) {
		this.carImagePath = carImagePath;
	}

}
