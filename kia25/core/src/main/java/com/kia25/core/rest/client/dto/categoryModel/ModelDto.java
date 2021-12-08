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
	 * 모델연식코드
	 */
	private String modelYear;

	/*
	 * 전시대표차종명
	 */
	private String carModelName;
	
	/*
	 * 대표차량이미지
	 */
	private String carImage;
	
	/*
	 *판매 모델 코드 
	 */
	private String salesModelCode;
	
	/*
	 * 대표차량코드
	 */
	private String carCode;
	
	/*
	 * 차량가격
	 */
	private String vehiclePrice;
	
	/*
	 * 통화코드
	 */
	private String currencyCode;

	
	
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

	public String getSalesModelCode() {
		return salesModelCode;
	}

	public void setSalesModelCode(String salesModelCode) {
		this.salesModelCode = salesModelCode;
	}

	public String getCarCode() {
		return carCode;
	}

	public void setCarCode(String carCode) {
		this.carCode = carCode;
	}

	public String getVehiclePrice() {
		return vehiclePrice;
	}

	public void setVehiclePrice(String vehiclePrice) {
		this.vehiclePrice = vehiclePrice;
	}

	public String getCurrencyCode() {
		return currencyCode;
	}

	public void setCurrencyCode(String currencyCode) {
		this.currencyCode = currencyCode;
	}

	


	
	
	
	
}
