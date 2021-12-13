package com.kia25.core.rest.client.dto.TrimModel;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ModelListDto {

	/**
	 * build002 컴포넌트 ModelListDto
	 */
	
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
