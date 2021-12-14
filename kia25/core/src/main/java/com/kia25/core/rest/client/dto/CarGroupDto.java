package com.kia25.core.rest.client.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CarGroupDto {
	
	/**
	 * 모델 코드
	 */
	private String carGroupCode;
	
	/**
	 * 전시 대표차 종명
	 */
	private String carGroupName;
	
	/**
	 * 모델 대표 이미지
	 */
	private String carImagePath;


	private List<TrimDto> trimList;
	
	/**
	 * getter / setter
	 */

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

	public List<TrimDto> getTrimList() {
		return trimList;
	}

	public void setTrimList(List<TrimDto> trimList) {
		this.trimList = trimList;
	}

	
	

}
