package com.kia25.core.rest.client.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CarGroupListDto {
	
	/**
	 * build002 컴포넌트 carGroupListDto
	 */
	
	/**
	 * car 모델 그룹 리스트
	 */
	private List<CarGroupDto> carGroupList;

	
	/**
	 * getter / setter 
	 */
	public List<CarGroupDto> getCarGroupList() {
		return carGroupList;
	}

	public void setCarGroupList(List<CarGroupDto> carGroupList) {
		this.carGroupList = carGroupList;
	}


}
