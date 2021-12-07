package com.kia25.core.rest.client.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ModelListDto {

	
	//차량 모델 list
	private List<ModelDto> modelDto;

	
	
	public List<ModelDto> getModelDto() {
		return modelDto;
	}

	public void setModelDto(List<ModelDto> modelDto) {
		this.modelDto = modelDto;
	}
	
	
	
}
