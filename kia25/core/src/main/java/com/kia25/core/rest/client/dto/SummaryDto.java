package com.kia25.core.rest.client.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SummaryDto {
	
	/*
	 * 선택한 차량 모델 이름
	 */
	private String modelName;
	
	/*
	 * 선택한 차량 이미지 경로
	 */
	private String carImgPath;
	
	/*
	 * 선택한 차량 trim 코드
	 */
	private String trimCode;
	
	/*
	 * 선택한 차량 trim 이름
	 */
	private String trimName;
	
	/*
	 * 선택한 차량 trim 가격
	 */
	private int trimPrice; 
	
	/*
	 * 선택한 외장 컬러 코드
	 */
	private String exteriorColorCode;
	
	/*
	 * 선택한 외장 컬러 이름
	 */
	private String exteriorColorName;
	
	/*
	 * 선택한 외장 컬러 가격
	 */
	private int exteriorColorPrice;
	
	/*
	 * 선택한 외장 컬러 이미지
	 */
	private String exteriorColorImgPath;
	
	/*
	 * 선택한 내장 컬러 코드
	 */
	private String interiorColorCode;
	
	/*
	 * 선택한 내장 컬러 이름
	 */
	private String interiorColorName;
	
	/*
	 * 선택한 내장 컬러 가격
	 */
	private int interiorColorPrice; 
	
	/*
	 * 선택한 내장 컬러 이미지
	 */
	private String interiorColorImgPath;
	
	/*
	 * 선택한 옵션
	 */
	private OptionListDto listOfOptions;
	
	/*
	 * 현재까지의 총 가격
	 */
	private int totalPrice;
	
	
	
	

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	public String getCarImgPath() {
		return carImgPath;
	}

	public void setCarImgPath(String carImgPath) {
		this.carImgPath = carImgPath;
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

	public int getTrimPrice() {
		return trimPrice;
	}

	public void setTrimPrice(int trimPrice) {
		this.trimPrice = trimPrice;
	}

	public String getExteriorColorCode() {
		return exteriorColorCode;
	}

	public void setExteriorColorCode(String exteriorColorCode) {
		this.exteriorColorCode = exteriorColorCode;
	}

	public String getExteriorColorName() {
		return exteriorColorName;
	}

	public void setExteriorColorName(String exteriorColorName) {
		this.exteriorColorName = exteriorColorName;
	}

	public int getExteriorColorPrice() {
		return exteriorColorPrice;
	}

	public void setExteriorColorPrice(int exteriorColorPrice) {
		this.exteriorColorPrice = exteriorColorPrice;
	}

	public String getExteriorColorImgPath() {
		return exteriorColorImgPath;
	}

	public void setExteriorColorImgPath(String exteriorColorImgPath) {
		this.exteriorColorImgPath = exteriorColorImgPath;
	}

	public String getInteriorColorCode() {
		return interiorColorCode;
	}

	public void setInteriorColorCode(String interiorColorCode) {
		this.interiorColorCode = interiorColorCode;
	}

	public String getInteriorColorName() {
		return interiorColorName;
	}

	public void setInteriorColorName(String interiorColorName) {
		this.interiorColorName = interiorColorName;
	}

	public int getInteriorColorPrice() {
		return interiorColorPrice;
	}

	public void setInteriorColorPrice(int interiorColorPrice) {
		this.interiorColorPrice = interiorColorPrice;
	}

	public String getInteriorColorImgPath() {
		return interiorColorImgPath;
	}

	public void setInteriorColorImgPath(String interiorColorImgPath) {
		this.interiorColorImgPath = interiorColorImgPath;
	}

	public OptionListDto getListOfOptions() {
		return listOfOptions;
	}

	public void setListOfOptions(OptionListDto listOfOptions) {
		this.listOfOptions = listOfOptions;
	}

	public int getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(int totalPrice) {
		this.totalPrice = totalPrice;
	}
	
	
	
	
	
	
	
	
}
