package com.kia25.core.rest.client.dto.categoryModel;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ModelDto {
	
	/*
	 * build 001 컴포넌트의 DTO
	 */

	/*
	 * 차종카테고리코드
	 */
	private String categoryCode;
	
	/*
	 * 모델 코드 
	 */
	private String modelCode;
	
	/*
	 * 전시대표차종명
	 */
	private String carModelName;
	

	/*
	 * 대표차량이미지
	 */
	private String carImage;

	
	
		
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

	public String getCarModelName() {
		return carModelName;
	}

	public void setCarModelName(String carModelName) {
		this.carModelName = carModelName;
	}

	public String getCarImage() {
		return carImage;
	}

	public void setCarImage(String carImage) {
		this.carImage = carImage;
	}
	
	
	
	
}
