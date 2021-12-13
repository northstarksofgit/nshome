package com.kia25.core.rest.client.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ModelListDto {

	/**
	 * 모델 리스트
	 */
	private List<ModelDto> modelList;

	
	/**
	 * getter / setter
	 */
	public List<ModelDto> getModelList() {
		return modelList;
	}

	public void setModelList(List<ModelDto> modelList) {
		this.modelList = modelList;
	}
	
	
}
