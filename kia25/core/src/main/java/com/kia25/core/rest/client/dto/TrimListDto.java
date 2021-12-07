package com.kia25.core.rest.client.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TrimListDto {

	List<TrimDto> trimList;

	
	public List<TrimDto> getTrimList() {
		return trimList;
	}

	public void setTrimList(List<TrimDto> trimList) {
		this.trimList = trimList;
	}
	
	
	
}
