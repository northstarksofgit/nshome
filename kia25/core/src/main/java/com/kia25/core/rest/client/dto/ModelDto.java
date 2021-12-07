package com.kia25.core.rest.client.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ModelDto {

	private String modelId;
	private String modelName;
	private String categoryCode;
	private String categoryName;
	private String modelThumnail;
	private ModelDetailListDto modelDetail;
	
	
	public String getModelId() {
		return modelId;
	}
	public void setModelId(String modelId) {
		this.modelId = modelId;
	}
	public String getModelName() {
		return modelName;
	}
	public void setModelName(String modelName) {
		this.modelName = modelName;
	}
	public String getCategoryCode() {
		return categoryCode;
	}
	public void setCategoryCode(String categoryCode) {
		this.categoryCode = categoryCode;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	public String getModelThumnail() {
		return modelThumnail;
	}
	public void setModelThumnail(String modelThumnail) {
		this.modelThumnail = modelThumnail;
	}
	public ModelDetailListDto getModelDetail() {
		return modelDetail;
	}
	public void setModelDetail(ModelDetailListDto modelDetail) {
		this.modelDetail = modelDetail;
	}
	
	
	
	
	
	
}
