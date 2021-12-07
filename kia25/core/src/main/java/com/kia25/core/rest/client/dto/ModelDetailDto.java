package com.kia25.core.rest.client.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ModelDetailDto {

	//모델 상세 id
	private String modelDetailId;
	
	//모델 상세 명
	private String modelDetailName;
	
	//기어 변속?
	private String trmsn;
	
	//트림
	private TrimListDto trim;

	public String getModelDetailId() {
		return modelDetailId;
	}

	public void setModelDetailId(String modelDetailId) {
		this.modelDetailId = modelDetailId;
	}

	public String getModelDetailName() {
		return modelDetailName;
	}

	public void setModelDetailName(String modelDetailName) {
		this.modelDetailName = modelDetailName;
	}

	public String getTrmsn() {
		return trmsn;
	}

	public void setTrmsn(String trmsn) {
		this.trmsn = trmsn;
	}

	public TrimListDto getTrim() {
		return trim;
	}

	public void setTrim(TrimListDto trim) {
		this.trim = trim;
	}
	
	
	
	
	
	
}
