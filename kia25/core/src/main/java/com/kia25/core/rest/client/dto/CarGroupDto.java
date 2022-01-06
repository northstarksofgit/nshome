package com.kia25.core.rest.client.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CarGroupDto {
	
	/**
	 * carGroup 모델 코드
	 */
	private String carGroupCode;
	
	/**
	 * 전시 대표 차종명
	 */
	private String carGroupName;

	/**
	 * 모델 대표 이미지
	 */
	private String carImagePath;
	
	/**
	 * 정렬 순서
	 */
	private int sortOrder;
	
	/**
	 * 사용 유무
	 */
	private String useYn; 

	
	
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
	
	public int getSortOrder() {
		return sortOrder;
	}
	
	public void setSortOrder(int sortOrder) {
		this.sortOrder = sortOrder;
	}
	
	public String getUseYn() {
		return useYn;
	}
	
	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}
	

}
