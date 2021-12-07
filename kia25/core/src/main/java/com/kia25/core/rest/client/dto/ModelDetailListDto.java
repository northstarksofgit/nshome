package com.kia25.core.rest.client.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ModelDetailListDto {

	private List<ModelDetailDto> modelDetailList;

	public List<ModelDetailDto> getModelDetailList() {
		return modelDetailList;
	}

	public void setModelDetailList(List<ModelDetailDto> modelDetailList) {
		this.modelDetailList = modelDetailList;
	}
	
	
	
	
}
