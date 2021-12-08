package com.kia25.core.rest.client.dto.categoryModel;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ModelListDto {
	
	/*
	 * build 001 컴포넌트의 DTO
	 */

	
	//차량 모델 list
	private List<ModelDto> modelList;

	public List<ModelDto> getModelList() {
		return modelList;
	}

	public void setModelList(List<ModelDto> modelList) {
		this.modelList = modelList;
	}
}
