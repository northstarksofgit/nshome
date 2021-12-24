package com.kia25.core.rest.client.dto;


import java.util.List;

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
	private String extColorCode;
	
	/*
	 * 선택한 외장 컬러 이름
	 */
	private String extColorName;
	
	/*
	 * 선택한 외장 컬러 가격
	 */
	private int extColorPrice;
	
	/*
	 * 선택한 외장 컬러 이미지
	 */
	private String extColorImgPath;
	
	/*
	 * 선택한 내장 컬러 코드
	 */
	private String intColorCode;
	
	/*
	 * 선택한 내장 컬러 이름
	 */
	private String intColorName;
	
	/*
	 * 선택한 내장 컬러 가격
	 */
	private int intColorPrice; 
	
	/*
	 * 선택한 내장 컬러 이미지
	 */
	private String intColorImgPath;
	
	/*
	 * 선택한 옵션
	 */
	private List<OptionDto> listOfOptions;
	
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


	public List<OptionDto> getListOfOptions() {
		return listOfOptions;
	}

	public void setListOfOptions(List<OptionDto> listOfOptions) {
		this.listOfOptions = listOfOptions;
	}

	public int getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(int totalPrice) {
		this.totalPrice = totalPrice;
	}

	public String getExtColorCode() {
		return extColorCode;
	}

	public void setExtColorCode(String extColorCode) {
		this.extColorCode = extColorCode;
	}

	public String getExtColorName() {
		return extColorName;
	}

	public void setExtColorName(String extColorName) {
		this.extColorName = extColorName;
	}

	public int getExtColorPrice() {
		return extColorPrice;
	}

	public void setExtColorPrice(int extColorPrice) {
		this.extColorPrice = extColorPrice;
	}

	public String getExtColorImgPath() {
		return extColorImgPath;
	}

	public void setExtColorImgPath(String extColorImgPath) {
		this.extColorImgPath = extColorImgPath;
	}

	public String getIntColorCode() {
		return intColorCode;
	}

	public void setIntColorCode(String intColorCode) {
		this.intColorCode = intColorCode;
	}

	public String getIntColorName() {
		return intColorName;
	}

	public void setIntColorName(String intColorName) {
		this.intColorName = intColorName;
	}

	public int getIntColorPrice() {
		return intColorPrice;
	}

	public void setIntColorPrice(int intColorPrice) {
		this.intColorPrice = intColorPrice;
	}

	public String getIntColorImgPath() {
		return intColorImgPath;
	}

	public void setIntColorImgPath(String intColorImgPath) {
		this.intColorImgPath = intColorImgPath;
	}

	
	
	
	
	
	
	
}
